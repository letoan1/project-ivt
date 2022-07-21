import '../../sass/_register.scss';
import { actCreateUser } from '../../redux/actions/userAction';

import { Button, Checkbox, Form, Input, Select, Modal, message } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actLogin } from '../../redux/actions/authAction';
const { Option } = Select;

const valid = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export default function RegisterForm(props) {
    const dispatch = useDispatch();
    const { isLoading, status } = useSelector((state) => state.user);
    const { isLoadingLogin, notif, isLoggIn } = useSelector((state) => state.auth);
    const [form] = Form.useForm();
    const [formLogin] = Form.useForm();

    const handleRegister = (value) => {
        const user = {
            email: value.username,
            password: value.password,
            phone: value.phone,
            mail: value.email,
            address: value.address,
            gender: value.gender,
        };
        message.success('Đăng ký thành công !');
        dispatch(actCreateUser(user));
        props.setModal(false);
        form.resetFields();
    };

    React.useEffect(() => {
        if (!isLoading && status) {
            message.info(status);
            if (status === 'registerSucess') {
                message.success('Đăng ký thành công !');
            }
        }
        // eslint-disable-next-line
    }, [isLoading]);

    const handleLogin = (values) => {
        dispatch(actLogin(values));
        props.setModal(false);
        formLogin.resetFields();
    };

    React.useEffect(() => {
        if (!isLoadingLogin && !isLoggIn && notif === 'Đăng nhập thất bại !') {
            message.error(notif);
        } else if (!isLoadingLogin && isLoggIn && notif === 'Đăng nhập thành công !') {
            message.success(notif);
        }
        // eslint-disable-next-line
    }, [isLoadingLogin]);

    if (isLoggIn) {
        console.log('Login succsessfully !');
    }

    return (
        <div className="register">
            <Modal
                title={'Register Member & Login'}
                centered
                footer={null}
                mask={true}
                maskClosable={true}
                width={1000}
                visible={props.isVisible}
                onCancel={() => props.setModal(false)}
            >
                <div className="modal-content">
                    <div className="register__form">
                        <Form
                            form={form}
                            name="register"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            autoComplete="off"
                            onFinish={handleRegister}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống trường này !',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: `Email không hợp lệ !`,
                                    },
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống trường này !',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống trường này !',
                                    },
                                    {
                                        min: 6,
                                        message: 'Mật khẩu phải có ít nhất 6 ký tự !',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Retype password"
                                name="retype-password"
                                dependencies={['password']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống trường này !',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('Mật khẩu nhập lại không chính xác !');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống trường này !',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    { required: true, message: 'Không được bỏ trống trường này !' },
                                    () => ({
                                        validator(_, value) {
                                            if (!value || value.match(valid)) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('Số điện thoại không hợp lệ !');
                                        },
                                    }),
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Gender"
                                name="gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống trường này !',
                                    },
                                ]}
                            >
                                <Select placeholder="Chọn giới tính của bạn..." allowClear>
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" className="btn btn-form">
                                    ĐĂNG KÝ
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="login__form">
                        <Form
                            form={formLogin}
                            name="login"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            autoComplete="off"
                            onFinish={handleLogin}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống trường này !',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được bỏ trống trường này !',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" className="btn btn-form">
                                    ĐĂNG NHẬP
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
