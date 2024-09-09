import React, { useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Tooltip } from 'antd';

export default createBoard({
    name: 'Icon Position',
    Board: () => {
        const [position, setPosition] = useState<'start' | 'end'>('end');

        return (
            <div>
                <div>
                    <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
                        <Radio.Button value="start">start</Radio.Button>
                        <Radio.Button value="end">end</Radio.Button>
                    </Radio.Group>
                </div>
                <Divider orientation="left" plain>
                    Preview
                </Divider>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Tooltip title="search">
                            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>
                        <Button type="primary" shape="circle">
                            A
                        </Button>
                        <Button type="primary" icon={<SearchOutlined />} iconPosition={position}>
                            Search
                        </Button>
                        <Tooltip title="search">
                            <Button shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>
                        <Button icon={<SearchOutlined />} iconPosition={position}>
                            Search
                        </Button>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Tooltip title="search">
                            <Button shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>
                        <Button icon={<SearchOutlined />} type="text" iconPosition={position}>
                            Search
                        </Button>
                        <Tooltip title="search">
                            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                        </Tooltip>
                        <Button type="dashed" icon={<SearchOutlined />} iconPosition={position}>
                            Search
                        </Button>
                        <Button
                            icon={<SearchOutlined />}
                            href="https://www.google.com"
                            iconPosition={position}
                        />
                        <Button type="primary" loading iconPosition={position}>
                            Loading
                        </Button>
                    </div>
                </div>
            </div>
        );
    },
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});
