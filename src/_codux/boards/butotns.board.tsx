import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button, Space } from 'antd';

export default createBoard({
  name: 'Buttons',
  Board: () =>   <div>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>,
  isSnippet: true,
});
