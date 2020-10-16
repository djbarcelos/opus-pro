import React from 'react';
import ProLayout, { MenuDataItem, PageContainer } from '@ant-design/pro-layout';
import { Link } from 'umi';

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
  console.log(menuList)
  return menuList.map((item) => {
    // console.log(menuList)
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return localItem//Authorized.check(item.authority, localItem, null) as MenuDataItem;
  });
}


export default (props: any) => (
  <div
    style={{
      height: '100vh',
      overflow: 'auto',
    }}
  >
    <ProLayout
      menuDataRender={menuDataRender}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}




    // location={{
    //   pathname: '/config/template/new',
    // }}

    >
      <PageContainer>
        {props.children}
      </PageContainer>
    </ProLayout>
  </div>
);
