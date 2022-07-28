import React, { useEffect, useRef, useState } from 'react';
import { Space, Table, Button, Popconfirm, message, Input } from 'antd';
import { EditFilled, DeleteFilled, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../../Form/UserForm';
import { UserTypes } from '../../redux/constants';
import { actGetUsersSuccess } from '../../redux/actions/userAction';
import { getAllUser } from '../../apis/usersApi';

const Users = () => {
    const THEME = useSelector((state) => state.theme.theme);
    const isDark = Boolean(THEME === 'dark');
    const dispatch = useDispatch();

    const fetchUser = async () => {
        try {
            const users = await getAllUser();
            return users;
        } catch (error) {
            console.error('>>> Get users fail', error);
        }
    };

    const modalRef = useRef(null);
    const [modeModal, setModeModal] = useState(null);

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
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
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
                    <Button size="small" onClick={(e) => handleEditUser(record, e)}>
                        <EditFilled />
                    </Button>
                    <Popconfirm
                        placement="topRight"
                        title="Are you sure to delete this product?"
                        onConfirm={(e) => onDelete(record, e)}
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
            phoneNumber: '0909090999',
            address: 'Da Nang, Viet Nam',
        },
        {
            id: 2,
            username: 'Minh Tien',
            dateCreated: new Date().toLocaleDateString(),
            role: 'guest',
            email: 'tienleminh@gmail.com',
            phoneNumber: '0909090999',
            address: 'Vung Tau, Viet Nam',
        },
        {
            id: 3,
            username: 'Vu Vuong',
            dateCreated: new Date().toLocaleDateString(),
            role: 'guest',
            email: 'vuvuong@gmail.com',
            phoneNumber: '0909090999',
            address: 'Lao Cai, Viet Nam',
        },
        {
            id: 4,
            username: 'Van Chinh',
            dateCreated: new Date().toLocaleDateString(),
            role: 'guest',
            email: 'chinhvang@gmail.com',
            phoneNumber: '0909090999',
            address: 'Quang Nam, Viet Nam',
        },
        {
            id: 5,
            username: 'Van Toan',
            dateCreated: new Date().toLocaleDateString(),
            role: 'admin',
            email: 'toanvanle@gmail.com',
            phoneNumber: '0909090999',
            address: 'Quang Tri, Viet Nam',
        },
    ]);
    const onDelete = (user, e) => {
        e.preventDefault();

        if (user.role === 'admin') {
            message.warning('Cannot delete ADMIN account');
            return;
        }
        const newData = dataSource.filter((item) => item.id !== user.id);
        setDataSource(newData);
        message.success('Delete product success');
    };

    const handleAddUser = () => {
        setModeModal('ADD');
        modalRef.current?.handleOpenModal();
    };
    const handleEditUser = (user, e) => {
        e.preventDefault();
        setModeModal('EDIT');
        modalRef.current?.handleOpenModal(user);
    };
    return (
        <>
            <div className="new-user" style={{ marginBottom: 10 }}>
                <Button type="primary" onClick={handleAddUser}>
                    Add new User
                </Button>
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
                size="medium"
                bordered
                pagination={{
                    pageSize: 15,
                    style: {
                        padding: '0 20px',
                    },
                }}
                rowKey={(record) => record.id}
                className={`${isDark ? 'dark-style' : 'light-style'}`}
            ></Table>
            <UserForm ref={modalRef} mode={modeModal} />
        </>
    );
};

export default Users;
