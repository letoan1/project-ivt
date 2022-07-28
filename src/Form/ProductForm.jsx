import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Input, Form, Select, Button, InputNumber, Tag, Modal } from 'antd';

const ProductForm = forwardRef(({ mode }, modalRef) => {
    const { TextArea } = Input;
    const { Option } = Select;
    const { CheckableTag } = Tag;
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const idProductRef = useRef(null);

    // tags data
    const [selectedTags, setSelectedTags] = useState([]);
    const tagsData = ['new', 'best seller', 'summer', 'spring', 'winter', 'autumn', 'men', 'women', 'sale-off'];

    // form layout
    const layout = {
        labelCol: {
            lg: {
                span: 4,
                offset: 0,
            },
            md: {
                span: 24,
                offset: 1,
            },
            sm: {
                span: 24,
                offset: 1,
            },
        },
        wrapperCol: {
            lg: {
                span: 16,
                offset: 0,
            },
            md: {
                span: 24,
                offset: 1,
            },
            sm: {
                span: 24,
                offset: 1,
            },
        },
    };

    useImperativeHandle(modalRef, () => {
        return {
            handleOpenModal,
        };
    });

    const handleOpenModal = (product) => {
        if (product) {
            idProductRef.current = product.id;
            const value = {
                ...product,
            };
            form.setFieldsValue(value);
            setSelectedTags(product?.tag);
        }
        setVisible(true);
    };

    const handleCloseModal = () => {
        setVisible(false);
        form.resetFields();
    };

    const handleOkModal = () => {
        setVisible(false);
        form.resetFields();
    };

    const onEditProduct = (id, product) => {
        form.resetFields();
        setVisible(false);
    };

    const onAddProduct = (product) => {
        console.log(product);
        form.resetFields();
        setSelectedTags([]);
        setVisible(false);
    };

    // handle events
    const onFinish = (value) => {
        const valueClone = { ...value };
        const product = {
            ...valueClone,
            tags: selectedTags,
        };
        if (mode === 'ADD') {
            onAddProduct(product);
        } else if (mode === 'EDIT') {
            onEditProduct(idProductRef.current, product);
        }
    };

    const handleChangeTag = (tag, checked) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <Modal
            title={`${mode === 'ADD' ? 'New Product' : 'Edit Product'}`}
            centered
            visible={visible}
            onOk={handleOkModal}
            onCancel={handleCloseModal}
            width="80%"
        >
            <Form {...layout} onFinish={onFinish} name="product-form" form={form} autoComplete="off">
                <Form.Item
                    name="name"
                    label="Product Name"
                    rules={[
                        {
                            required: true,
                            message: 'Product Name is required',
                        },
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Product's name" />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextArea rows={4} placeholder="Product's description" />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select placeholder="Select category of product" style={{ width: 250 }}>
                        <Option value="men's">Men's</Option>
                        <Option value="women's">Women's</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="brand"
                    label="Brand"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select placeholder="Select brand of product" style={{ width: 250 }}>
                        <Option value="dior">Dior</Option>
                        <Option value="chanel">Chanel</Option>
                        <Option value="gucci">Gucci</Option>
                        <Option value="prada">Prada</Option>
                        <Option value="ysl">YSL</Option>
                        <Option value="versace">Versace</Option>
                        <Option value="other">Other...</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Price"
                    rules={[
                        {
                            type: Number,
                            required: true,
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        max={100000000}
                        step={50000}
                        placeholder="Enter product's price (VND)"
                    />
                </Form.Item>
                <Form.Item
                    name="capacity"
                    label="Capacity"
                    rules={[
                        {
                            type: Number,
                            required: true,
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        max={150}
                        step={5}
                        placeholder="Enter product's capacity (ml)"
                    />
                </Form.Item>
                <Form.Item
                    name="discount"
                    label="Discount"
                    rules={[
                        {
                            type: Number,
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: 200 }}
                        min={0}
                        max={100}
                        step={5}
                        placeholder="Enter product's discount (%)"
                    />
                </Form.Item>
                <Form.Item
                    label="Tags"
                    rules={[
                        {
                            type: Array,
                            required: true,
                        },
                    ]}
                >
                    {tagsData.map((tag) => (
                        <CheckableTag
                            key={tag}
                            checked={selectedTags.indexOf(tag) > -1}
                            onChange={(checked) => handleChangeTag(tag, checked)}
                            value={tag}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                </Form.Item>
                <Form.Item
                    label="Product Images"
                    name="srcImage"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Link to product's image" />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span: 24,
                        offset: 10,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
});

export default ProductForm;