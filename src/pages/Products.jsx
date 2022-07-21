import React, { useState } from 'react'
import { Space, Table, Button, Modal, Popconfirm } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux'
import NewProductForm from '../formProduct/NewProductForm';

const Products = () => {
  const { Column } = Table;
  const data = useSelector((state) => state.products);
  const [visible, setVisible] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [modeModal, setModeModal] = useState(false)

  const handleAddProduct = () => {
    setVisible(true)
    setModeModal(false)
  }
  const handleEditProduct = (id, e) => {
    e.preventDefault();
    setEditForm(true)
    setModeModal(true)
    console.log(id);
  }
  const handleDeleteProduct = (id, e) => {
    e.preventDefault();
    console.log(id);
  }
  return (
    <>
      <div className="new-product">
        <Button type="primary" onClick={handleAddProduct}>
          Add new product
        </Button>
        <Modal
          title="New product"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width='80%'
        >
          <NewProductForm mode={modeModal}/>
        </Modal>
      </div>
      <Table 
        dataSource={data} 
        size="small"
        pagination={{
          pageSize: 15,
        }}
        style={{
          padding: 10,
        }}
      >
        <Column title="ID" dataIndex="id" key="id" width='10%'/>
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
          width='10%'
        />
        <Column 
          title="Brand" 
          dataIndex="brand" 
          key="brand"
          filters={[
            {
              text: <span>Dior</span>,
              value: "dior",
            },
            {
              text: <span>Chanel</span>,
              value: "chanel",
            },
            {
              text: <span>Gucci</span>,
              value: "gucci",
            },
            {
              text: <span>Prada</span>,
              value: "prada",
            },
            {
              text: <span>YSL</span>,
              value: "ysl",
            },
            {
              text: <span>Versace</span>,
              value: "versace",
            },
            {
              text: <span>Other...</span>,
              value: "other",
            },
          ]}
          onFilter={(value, record) => record.brand.includes(value)}
          width='10%'
        />
        <Column 
          title="Price (VND)" 
          dataIndex="price" 
          key="price" 
          sorter={(a, b) => a.price - b.price}
          width='10%'
        />
        <Column 
          title="Discount (%)" 
          dataIndex="discount" 
          key="discount" 
          sorter={(a, b) => a.discount - b.discount}
          width='10%'
        />
        <Column 
          title="Capacity (ml)" 
          dataIndex="capacity" 
          key="capacity" 
          sorter={(a, b) => a.capacity - b.capacity}
          width='10%'
        />
        <Column
          title="Action"
          key="action"
          width='15%'
          align='center'
          render={(_, record) => (
            <Space size="small" >
              <Button 
                size='small'
                onClick={(e) => handleEditProduct(record.id, e)}
              >
                <EditFilled />Edit
              </Button>
              <Modal
                title="New product"
                centered
                visible={editForm}
                onOk={() => setEditForm(false)}
                onCancel={() => setEditForm(false)}
                width='80%'
              >
                <NewProductForm data={record} mode={modeModal}/>
              </Modal>
              <Popconfirm 
                placement="topRight"
                title="Are you sure to delete this product?"
                onConfirm={(e) => handleDeleteProduct(record.id, e)}
              >
                <Button size='small'>
                  <DeleteFilled />Delete
                </Button> 
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
    </>
  )
}

export default Products