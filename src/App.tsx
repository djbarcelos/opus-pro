import React, { useState } from 'react';
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  DefaultFooter,
} from '@ant-design/pro-layout';
import { Button, Card, DatePicker, Layout, Menu, Breadcrumb } from 'antd';
import './App.less';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import PG from './pages/dashboard/'


const App: React.FC<any> = (props: any) => {


  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const [view, setView] = useState({
    collapsed: false,
  })

  const setValue = (props: any) => {
    setView((oldValue: any) => {
      return {
        ...oldValue,
        ...props,
      }

    })
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={view.collapsed} onCollapse={() => setValue({ collapsed: view.collapsed ? false : true })}>
        <div className="logo" />
        <div style={{ display: "flex", height: '40px' }}>
          <div style={{ color: '#FFF', margin: 'auto', fontWeight: 'bold' }}>
            ANT DESIGNER PRO
          </div>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
          <Menu.Item key="1" icon={<PieChartOutlined />} >
            Option 1
            </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}  >
            Option 2
            </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>

          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          
          {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
            </div> */}
        </Content>

        <DefaultFooter
          copyright={`${new Date().getFullYear()} NGO Soluções`}
          links={[]}
        />

      </Layout>
    </Layout>
  )
}


export default App;

