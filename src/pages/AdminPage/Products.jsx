import React, { useRef, useState } from 'react';
import { Space, Table, Button, Popconfirm, message } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import ProductForm from '../../formProduct/ProductForm';

const Products = () => {
    const { Column } = Table;
    const products = JSON.parse(localStorage.getItem('products'));
    const [dataSource, setDataSource] = useState(products.products || []);
    const modalRef = useRef(null);
    const [modeModal, setModeModal] = useState(null);

    const handleAddProduct = () => {
        setModeModal('ADD');
        modalRef.current?.handleOpenModal();
    };
    const handleEditProduct = (product, e) => {
        e.preventDefault();
        setModeModal('EDIT');
        modalRef.current?.handleOpenModal(product);
    };
    const handleDeleteProduct = (id, e) => {
        e.preventDefault();
        const newData = dataSource.filter((item) => item.id !== id);
        setDataSource(newData);
        message.success('Delete product success');
    };
    return (
        <>
            <div className="new-product">
                <Button type="primary" onClick={handleAddProduct}>
                    Add new product
                </Button>
            </div>
            <Table
                dataSource={dataSource}
                size="small"
                pagination={{
                    pageSize: 15,
                }}
                style={{
                    marginTop: 10,
                }}
            >
                <Column title="ID" dataIndex="id" key="id" width="10%" />
                <Column
                    title="Name"
                    dataIndex="name"
                    key="productName"
                    sorter={(a, b) => a.name.localeCompare(b.name)}
                />
                <Column
                    title="Category"
                    dataIndex="category"
                    key="category"
                    filters={[
                        {
                            text: <span>Men's</span>,
                            value: "men's",
                        },
                        {
                            text: <span>Women's</span>,
                            value: "women's",
                        },
                    ]}
                    onFilter={(value, record) => record.category.includes(value)}
                    width="10%"
                />
                <Column
                    title="Brand"
                    dataIndex="brand"
                    key="brand"
                    filters={[
                        {
                            text: <span>Dior</span>,
                            value: 'dior',
                        },
                        {
                            text: <span>Chanel</span>,
                            value: 'chanel',
                        },
                        {
                            text: <span>Gucci</span>,
                            value: 'gucci',
                        },
                        {
                            text: <span>Prada</span>,
                            value: 'prada',
                        },
                        {
                            text: <span>YSL</span>,
                            value: 'ysl',
                        },
                        {
                            text: <span>Versace</span>,
                            value: 'versace',
                        },
                        {
                            text: <span>Other...</span>,
                            value: 'other',
                        },
                    ]}
                    onFilter={(value, record) => record.brand.includes(value)}
                    width="10%"
                />
                <Column
                    title="Price (VND)"
                    dataIndex="price"
                    key="price"
                    sorter={(a, b) => a.price - b.price}
                    width="10%"
                />
                <Column
                    title="Discount (%)"
                    dataIndex="discount"
                    key="discount"
                    sorter={(a, b) => a.discount - b.discount}
                    width="10%"
                />
                <Column
                    title="Capacity (ml)"
                    dataIndex="capacity"
                    key="capacity"
                    sorter={(a, b) => a.capacity - b.capacity}
                    width="10%"
                />
                <Column
                    title="Action"
                    key="action"
                    width="15%"
                    align="center"
                    render={(_, record) => (
                        <Space size="small">
                            <Button size="small" onClick={(e) => handleEditProduct(record, e)}>
                                <EditFilled />
                                Edit
                            </Button>
                            <Popconfirm
                                placement="topRight"
                                title="Are you sure to delete this product?"
                                onConfirm={(e) => handleDeleteProduct(record.id, e)}
                            >
                                <Button size="small">
                                    <DeleteFilled />
                                    Delete
                                </Button>
                            </Popconfirm>
                        </Space>
                    )}
                />
            </Table>
            <ProductForm ref={modalRef} mode={modeModal} />
        </>
    );
};

export default Products;
