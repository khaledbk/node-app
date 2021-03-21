import { Lib } from '../../../lib'
import { Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const { Header } = Layout;

const _Header = (props) =>{
    return <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item onClick={props.showDrawer}>
                    <MenuOutlined />
                </Menu.Item>
                <Menu.Item key="1">
                    Menu 1
                </Menu.Item>
                <Menu.Item key="2">
                    Menu 2
                </Menu.Item>
                <Menu.Item key="3">
                    Menu 3
                </Menu.Item>
            </Menu>
            </Header>
}

Lib.addComponent('Header',_Header)

