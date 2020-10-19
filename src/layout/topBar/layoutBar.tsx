import React from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined, ExportOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

import './style.less'


const LayoutBar: React.SFC<any> = () => {

    let nameCompany = "NGO Soluções"

    const onMenuClick = (event: {
        key: React.Key;
        keyPath: React.Key[];
        item: React.ReactInstance;
        domEvent: React.MouseEvent<HTMLElement>;
      }) => {
        const { key } = event;
    
        if (key === 'logout') { console.log('Sair')
        //   history.push(`/user/login`);
        //   localStorage.clear();
          return;
        }
        else if (key === 'selectCompany') { console.log('Selecionar companhia')
        //   history.replace('/user/selecionar-empresa')
        //   localStorage.removeItem('company');
          return;
        }
    
      };
    

    const menu = (
        <Menu selectedKeys={[]} onClick={(key) => onMenuClick(key)} >
            <Menu.Item key="selectCompany" >
                <ExportOutlined /> Selecionar Empresa
            </Menu.Item>
            <Menu.Item key="logout" >
                <LogoutOutlined /> Sair
                </Menu.Item>
        </Menu>
    );

    return (
        <div className="topBar">
            <span className="nameCompany" >
                {nameCompany}
            </span>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <UserOutlined />  Usuario Admin
                </a>
            </Dropdown>
        </div>
    );
}

export default LayoutBar;