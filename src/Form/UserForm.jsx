import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';

const UserForm = forwardRef(({ mode }, modalRef) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const idUserRef = useRef(null);

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

    const handleOpenModal = (user) => {
        if (user) {
            idUserRef.current = user.id;
            const value = {
                ...user,
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

    const onEditUser = (id, user) => {
        console.log('>>>id user:', id);
        console.log('>>>user:', user);
        form.resetFields();
        setVisible(false);
    };

    const onAddUser = (user) => {
        console.log(user);
        form.resetFields();
        setVisible(false);
    };

    const onFinish = (value) => {
        const valueClone = { ...value };
        const user = {
            ...valueClone,
        };
        if (mode === 'ADD') {
            onAddUser(user);
        } else if (mode === 'EDIT') {
            onEditUser(idUserRef.current, user);
        }
    };

    return (
        <Modal
            title={`${mode === 'ADD' ? 'Add New User' : 'Edit User'}`}
            centered
            visible={visible}
            onOk={handleOkModal}
            onCancel={handleCloseModal}
            width="60%"
        >
            <Form form={form} {...layout} name="order-form" autoComplete="off" onFinish={onFinish}>
                <Form.Item
                    name="id"
                    label="User ID"
                    rules={[
                        {
                            required: true,
                            message: 'User ID is required',
                        },
                    ]}
                >
                    <Input disabled={mode === 'ADD' ? false : true} />
                </Form.Item>
                <Form.Item
                    name="username"
                    label="User Name"
                    rules={[
                        {
                            required: true,
                            message: 'User Name is required',
                        },
                    ]}
                >
                    <Input disabled={mode === 'ADD' ? false : true} />
                </Form.Item>
                <Form.Item
                    name="dateCreated"
                    label="Date Created"
                    rules={[
                        {
                            required: true,
                            message: 'Date Created is required',
                        },
                    ]}
                >
                    <Input disabled={mode === 'ADD' ? false : true} />
                </Form.Item>
                <Form.Item
                    name="role"
                    label="Role"
                    rules={[
                        {
                            required: true,
                            message: 'Role is required',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value="admin">Admin</Radio>
                        <Radio value="guest">Guest</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Email is required',
                            type: 'email',
                        },
                    ]}
                >
                    <Input disabled={mode === 'ADD' ? false : true} />
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Phone Number is required',
                        },
                    ]}
                >
                    <Input disabled={mode === 'ADD' ? false : true} />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Address is required',
                        },
                    ]}
                >
                    <Input disabled={mode === 'ADD' ? false : true} />
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

export default UserForm;
