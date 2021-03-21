
import { Lib } from '../../../lib'
import { Drawer } from 'antd';

const _Sidebar = (props) => {
  return (
    <>
      <Drawer
        title="E-COM"
        placement="left"
        closable={false}
        onClose={props.onClose}
        visible={props.visible}
      >
        <p>Menu 1...</p>
        <p>Menu 2...</p>
        <p>Menu 3...</p>
      </Drawer>
    </>
  );
};

Lib.addComponent('Sidebar',_Sidebar)
