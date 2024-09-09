import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button, Dropdown } from 'antd';

const onMenuClick = (e) => {
  console.log('click', e);
};

const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

export default createBoard({
  name: 'Multiple Buttons',
  Board: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown.Button menu={{ items, onClick: onMenuClick }}>Actions</Dropdown.Button>
    </div>
  ),
  isSnippet: true,
});
