import React, { useState } from 'react';
import { Space, Table, Button, Popconfirm, message, Input } from 'antd';
import { EditFilled, DeleteFilled, SearchOutlined } from '@ant-design/icons';

const Users = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            with: '10%',
        },
        {
            title: 'Name',
            dataIndex: 'username',
            with: '10%',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
                return (
                    <Input
                        autoFocus
                        placeholder="Search..."
                        value={selectedKeys[0]}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                            confirm({ closeDropdown: false });
                        }}
                        onPressEnter={() => confirm()}
                    ></Input>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />;
            },
            onFilter: (value, record) => record.username.toLowerCase().startsWith(value.toLowerCase()),
        },
        {
            title: 'Date Created',
            dataIndex: 'dateCreated',
            with: '10%',
            sorter: (a, b) => a.dateCreated - b.dateCreated,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            with: '10%',
            filters: [
                {
                    text: <span>Admin</span>,
                    value: 'admin',
                },
                {
                    text: <span>Guest</span>,
                    value: 'guest',
                },
            ],
            onFilter: (value, record) => record.role.includes(value),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            with: '15%',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            with: '20%',
        },
        {
            title: 'Action',
            width: '10%',
            align: 'center',
            render: (_, record) => (
                <Space size="small">
                    <Button size="small" onClick={(e) => onEdit(record, e)}>
                        <EditFilled />
                    </Button>
                    <Popconfirm
                        placement="topRight"
                        title="Are you sure to delete this product?"
                        onConfirm={(e) => onDelete(record.id, e)}
                    >
                        <Button size="small">
                            <DeleteFilled />
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            username: 'Minh Tung',
            dateCreated: new Date().toLocaleDateString(),
            role: 'admin',
            email: 'minhtung@gmail.com',
            address: 'Da Nang, Viet Nam',
        },
        {
            id: 2,
            username: 'Minh Tien',
            dateCreated: new Date().toLocaleDateString(),
            role: 'guest',
            email: 'tienleminh@gmail.com',
            address: 'Vung Tau, Viet Nam',
        },
        {
            id: 3,
            username: 'Vu Vuong',
            dateCreated: new Date().toLocaleDateString(),
            role: 'guest',
            email: 'vuvuong@gmail.com',
            address: 'Lao Cai, Viet Nam',
        },
        {
            id: 4,
            username: 'Van Chinh',
            dateCreated: new Date().toLocaleDateString(),
            role: 'guest',
            email: 'chinhvang@gmail.com',
            address: 'Quang Nam, Viet Nam',
        },
        {
            id: 5,
            username: 'Van Toan',
            dateCreated: new Date().toLocaleDateString(),
            role: 'admin',
            email: 'toanvanle@gmail.com',
            address: 'Quang Tri, Viet Nam',
        },
    ]);
    const onDelete = (id, e) => {
        e.preventDefault();
        const newData = dataSource.filter((item) => item.id !== id);
        setDataSource(newData);
        message.success('Delete product success');
    };

    const onEdit = (order, e) => {
        e.preventDefault();
        console.log(order);
    };
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            size="small"
            pagination={{
                pageSize: 2,
            }}
        ></Table>
    );
};

export default Users;
