import React, { useRef, useState } from 'react';
import { Space, Table, Button, Popconfirm, message, Input } from 'antd';
import { EditFilled, DeleteFilled, SearchOutlined } from '@ant-design/icons';
import OrderForm from '../../Form/OrderForm';

const Orders = () => {
    const modalRef = useRef(null);
    const columns = [
        {
            title: 'Order Code',
            dataIndex: 'id',
            with: '10%',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
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
            onFilter: (value, record) => record.customer.toLowerCase().startsWith(value.toLowerCase()),
        },
        {
            title: 'Order',
            dataIndex: 'order',
            with: '15%',
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
            onFilter: (value, record) => record.order.toLowerCase().startsWith(value.toLowerCase()),
        },
        {
            title: 'Delivery Date',
            dataIndex: 'deliveryDate',
            with: '15%',
            sorter: (a, b) => a.deliveryDate - b.deliveryDate,
        },
        {
            title: 'Delivery Pricing',
            dataIndex: 'deliveryPrice',
            with: '15%',
            sorter: (a, b) => a.deliveryPrice - b.deliveryPrice,
        },
        {
            title: 'Delivery Status',
            dataIndex: 'deliveryStatus',
            with: '10%',
            filters: [
                {
                    text: <span>Delivered</span>,
                    value: 'delivered',
                },
                {
                    text: <span>Shipped</span>,
                    value: 'shipped',
                },
                {
                    text: <span>In Transit </span>,
                    value: 'inTransit',
                },
                {
                    text: <span>Canceled</span>,
                    value: 'canceled',
                },
            ],
            onFilter: (value, record) => record.deliveryStatus.includes(value),
            render: (_, { deliveryStatus }) => (
                <span
                    style={{
                        color: `${
                            deliveryStatus === 'delivered'
                                ? 'green'
                                : deliveryStatus === 'shipped'
                                ? 'blue'
                                : deliveryStatus === 'inTransit'
                                ? 'orange'
                                : 'red'
                        }`,
                    }}
                >
                    {deliveryStatus.toUpperCase()}
                </span>
            ),
            align: 'center',
        },
        {
            title: 'Address',
            dataIndex: 'address',
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
            customer: 'Minh Tung',
            order: 'Dior Sauvage',
            deliveryDate: new Date().toLocaleDateString(),
            deliveryPrice: '2 300 000',
            deliveryStatus: 'delivered',
            address: 'Da Nang, Viet nam',
        },
        {
            id: 2,
            customer: 'Van Toan',
            order: 'Gucci',
            deliveryDate: new Date().toLocaleDateString(),
            deliveryPrice: '2 300 000',
            deliveryStatus: 'shipped',
            address: 'Da Nang, Viet nam',
        },
        {
            id: 3,
            customer: 'Tien Linh',
            order: 'Versace',
            deliveryDate: new Date().toLocaleDateString(),
            deliveryPrice: '2 300 000',
            deliveryStatus: 'shipped',
            address: 'Da Nang, Viet nam',
        },
        {
            id: 4,
            customer: 'Cong Phuong',
            order: 'Chanel',
            deliveryDate: new Date().toLocaleDateString(),
            deliveryPrice: '2 300 000',
            deliveryStatus: 'inTransit',
            address: 'Da Nang, Viet nam',
        },
        {
            id: 5,
            customer: 'Cong Phuong',
            order: 'Chanel',
            deliveryDate: new Date().toLocaleDateString(),
            deliveryPrice: '2 300 000',
            deliveryStatus: 'canceled',
            address: 'Da Nang, Viet nam',
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
        modalRef.current?.handleOpenModal(order);
    };
    return (
        <>
            <Table columns={columns} dataSource={dataSource} bordered size="small"></Table>
            <OrderForm ref={modalRef} />
        </>
    );
};

export default Orders;
