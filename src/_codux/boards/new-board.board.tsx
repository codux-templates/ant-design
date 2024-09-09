import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Input, Button } from 'antd';

export default createBoard({
  name: 'InputBoard',
  Board: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
      <Input placeholder="Default Input" />
      <Input.Password placeholder="Password Input" />
      <Input.TextArea placeholder="Text Area Input" />
      <Input.Search placeholder="Search Input" />
      <Input.Group compact>
        <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Input" />
        <Button style={{ width: '200px' }} type="primary">Search</Button>
      </Input.Group>
    </div>
  ),
  isSnippet: true,
});
