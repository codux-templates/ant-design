import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button } from 'antd';

export default createBoard({
  name: 'Disabled',
  Board: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="text">Text</Button>
        <Button type="text" disabled>
          Text(disabled)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link(disabled)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="primary" href="https://ant.design/index-cn">
          Href Primary
        </Button>
        <Button type="primary" href="https://ant.design/index-cn" disabled>
          Href Primary(disabled)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button danger>Danger Default</Button>
        <Button danger disabled>
          Danger Default(disabled)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button danger type="text">
          Danger Text
        </Button>
        <Button danger type="text" disabled>
          Danger Text(disabled)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="link" danger>
          Danger Link
        </Button>
        <Button type="link" danger disabled>
          Danger Link(disabled)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button ghost>Ghost</Button>
        <Button ghost disabled>
          Ghost(disabled)
        </Button>
      </div>
    </div>
  ),
  isSnippet: true,
});
