import { Lib } from '../../lib';
import React, { useState } from 'react';

import { Layout, Breadcrumb } from 'antd';
const { Header, Sidebar, Home } = Lib.getComponents()
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
            <Breadcrumb.Item>Menu A</Breadcrumb.Item>
            <Breadcrumb.Item>Menu B</Breadcrumb.Item>
            <Breadcrumb.Item>Menu C</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          Content Here
          <Home test={()=> alert('Ch7alek ?')} />
        </div>
        </Content>
    </Layout>
  </>
  );
}

Lib.addComponent('App',App)
