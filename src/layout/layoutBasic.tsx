import React, { useRef } from 'react';
import ProLayout, { MenuDataItem, PageContainer, DefaultFooter } from '@ant-design/pro-layout';
//@ts-ignore
import { Link, history } from 'umi';

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


const BasicLayout: React.FC<any> = (props) => {

  const {
    settings,
  } = props;

  const menuDataRef = useRef<MenuDataItem[]>([]);

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
      }}>

      <ProLayout
        menuHeaderRender={(logo, title) => (
          <div style={{ color: '#FFF', margin: 'auto', fontWeight: 'bold', fontSize: '14px' }}>
            Admin OPUS Pro
          </div>
        )}
        // formatMessage={formatMessage}
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