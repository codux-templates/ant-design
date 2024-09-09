import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Dropdown, Menu, Button } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default createBoard({
  name: 'DropdownBoard',
  Board: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
      <Dropdown overlay={menu}>
        <Button>Dropdown Menu</Button>
      </Dropdown>
      <Dropdown.Button overlay={menu}>Dropdown Button</Dropdown.Button>
    </div>
  ),
  isSnippet: true,
});
