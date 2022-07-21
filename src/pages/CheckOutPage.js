import '../sass/_checkout.scss';

import React from 'react';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;

export default function CheckOutPage() {
    const [form] = Form.useForm();
    return (
        <div className="checkout">
            <div className="checkout__col">
                <div className="col__info-cus">
                    <h3>THANH TOÁN VÀ GIAO HÀNG</h3>
                    <Form
                        name="checkout"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        layout={'vertical'}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <div className="form-group">
                            <div className="col-left">
                                <Form.Item
                                    label="Số điện thoại *"
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone number!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Select
                                    showSearch
                                    placeholder="Tỉnh/Thành phố *"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().includes(input.toLowerCase())
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <br />
                                <Select
                                    showSearch
                                    placeholder="Xã/Phường/Thị trấn *"
                                    label="Xã/Phường/Thị trấn *"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().includes(input.toLowerCase())
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                            <div className="col-right">
                                <Form.Item
                                    label="Địa chỉ email "
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email !',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Select
                                    showSearch
                                    placeholder="Quận huyện *"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().includes(input.toLowerCase())
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                                <Form.Item
                                    label="Địa chỉ "
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your address !',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="col__cart-checkout">
                    <p>fashf</p>
                </div>
            </div>
        </div>
    );
}
