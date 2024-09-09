import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default createBoard({
    name: 'TabsBoard',
    Board: () => (
        <div style={{ width: '100%', maxWidth: '600px' }}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
            <Tabs defaultActiveKey="1" type="card">
                <TabPane tab="Card Tab 1" key="1">
                    Content of Card Tab 1
                </TabPane>
                <TabPane tab="Card Tab 2" key="2">
                    Content of Card Tab 2
                </TabPane>
                <TabPane tab="Card Tab 3" key="3">
                    Content of Card Tab 3
                </TabPane>
            </Tabs>
        </div>
    ),
    isSnippet: true,
});
