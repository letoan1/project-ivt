import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Form, Input, Modal, Select, message } from 'antd';

const OrderForm = forwardRef((_, modalRef) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const idOrderRef = useRef(null);

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

    const handleOpenModal = (order) => {
        if (order) {
            idOrderRef.current = order.id;
            const value = {
                ...order,
            };
            console.log(value);
            form.setFieldsValue(value);
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

    const onFinish = (value) => {
        console.log('>>>> Order value', value);
        setVisible(false);
        message.success('Edit success');
    };
    return (
        <Modal
            title="Order Details"
            centered
            visible={visible}
            onOk={handleOkModal}
            onCancel={handleCloseModal}
            width="60%"
        >
            <Form form={form} {...layout} name="order-form" autoComplete="off" onFinish={onFinish}>
                <Form.Item name="id" label="Order Code">
                    <Input disabled />
                </Form.Item>
                <Form.Item name="customer" label="Customer">
                    <Input disabled />
                </Form.Item>
                <Form.Item name="order" label="Order">
                    <Input disabled />
                </Form.Item>
                <Form.Item name="deliveryDate" label="Delivery Date">
                    <Input disabled />
                </Form.Item>
                <Form.Item name="deliveryPrice" label="Delivery Pricing">
                    <Input disabled />
                </Form.Item>
                <Form.Item name="address" label="Address">
                    <Input disabled />
                </Form.Item>
                <Form.Item name="deliveryStatus" label="Delivery Status">
                    <Select placeholder="Select delivery status" style={{ width: 250 }}>
                        <Select.Option value="delivered">Delivered</Select.Option>
                        <Select.Option value="shipped">Shipped</Select.Option>
                        <Select.Option value="inTransit">In Transit</Select.Option>
                        <Select.Option value="canceled">Canceled</Select.Option>
                    </Select>
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

export default OrderForm;
