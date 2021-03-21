import { Lib } from '../../lib';
import React, { useState } from 'react';

import { Layout, Breadcrumb } from 'antd';
const { Header, Sidebar } = Lib.getComponents()
const { Content } = Layout;

const App = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
        setVisible(true);
  };
    
  const onClose = () => {
        setVisible(false);
  };
  
  return (
    <>
     <Sidebar visible={visible} onClose={onClose}/>
     <Layout className="layout">
        <Header showDrawer={showDrawer}/>
        <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
        </Content>
    </Layout>
  </>
  );
}

Lib.addComponent('App',App)
