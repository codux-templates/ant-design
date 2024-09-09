import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Card } from 'antd';

const { Meta } = Card;

export default createBoard({
  name: 'CardBoard',
  Board: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Card title="Default Card" style={{ width: 300 }}>
        <p>Card content</p>
      </Card>
      <Card
        hoverable
        cover={<img alt="example" src="https://via.placeholder.com/300" />}
        style={{ width: 300 }}
      >
        <Meta title="Card Title" description="Card description" />
      </Card>
      <Card
        title="Card with extra content"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
      </Card>
    </div>
  ),
  isSnippet: true,
});
