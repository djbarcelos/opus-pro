
import React, { useRef } from 'react';
import ProLayout, { MenuDataItem, PageContainer, DefaultFooter, BasicLayoutProps as ProLayoutProps, Settings, } from '@ant-design/pro-layout';
//@ts-ignore
import { Link, history, useIntl, Dispatch, connect } from 'umi';
import LayoutBar from './topBar/layoutBar';


// COLOR BACKGROUND MENU BAR
import './layoutBasic.less' 

export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
}

export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return localItem;
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} NGO Soluções`}
    links={[]}
  />
);


const BasicLayout: React.FC<BasicLayoutProps> = (props) => {

  const {
    dispatch,
    settings,
  } = props;

  const menuDataRef = useRef<MenuDataItem[]>([]);
  const { formatMessage } = useIntl();

  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
      }}>
      <ProLayout
        menuHeaderRender={(logo, title) => {
          title = title ? 'Admin OPUS Pro' : '';
          return (
            <div style={{ color: '#FFF', margin: 'auto', fontWeight: 'bold', fontSize: '14px' }}>
              {title}
            </div>
          )
        }}
        formatMessage={formatMessage}
        onCollapse={handleMenuCollapse}
        onMenuHeaderClick={() => history.push('/')}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: ''

          },
          ...routers,
        ]}
        itemRender={(route, params, routes, paths) => {
          const isLastMenu = routes.indexOf(route) === routes.length;
          return isLastMenu ? (
            <span>{route.breadcrumbName}</span>
          ) :
            (
              <Link to={route.path}>{route.breadcrumbName}</Link>
            );
        }}
        footerRender={() => defaultFooterDom}
        menuDataRender={menuDataRender}
        rightContentRender={() => <LayoutBar />}
        postMenuData={(menuData) => {
          menuDataRef.current = menuData || [];
          return menuData || [];
        }}
        {...props}
        {...settings}
      >

        <PageContainer>
          {props.children}
        </PageContainer>

      </ProLayout>

    </div>
  )
}

export default BasicLayout;