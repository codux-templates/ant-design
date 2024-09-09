import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];

export default createBoard({
    name: 'TableBoard',
    Board: () => (
        <div style={{ width: '100%', maxWidth: '600px' }}>
            <Table columns={columns} dataSource={data} />
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 1 }} bordered />
            <Table columns={columns} dataSource={data} scroll={{ y: 240 }} bordered />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowHeight: 719,
    },
});
