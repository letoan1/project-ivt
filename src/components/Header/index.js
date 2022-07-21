/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../sass/_header.scss';
import RegisterForm from '../RegisterForm';

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import SideDrawer from '../Drawer';
import { useSelector } from 'react-redux';
const { Search } = Input;

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: 'Tạo kiểu tóc',
                children: [
                    {
                        key: '1-1',
                        label: <Link to="/products">Sáp vuốt tóc</Link>,
                    },
                    {
                        key: '1-2',
                        label: 'Pomade',
                    },
                    {
                        key: '1-3',
                        label: 'Bột tạo phồng',
                    },
                ],
            },
            {
                key: '2',
                label: 'Chăm sóc tóc',
                children: [
                    {
                        key: '2-1',
                        label: 'Dầu gội cao cấp',
                    },
                    {
                        key: '2-2',
                        label: 'Dầu xả cao cấp',
                    },
                ],
            },
            {
                key: '3',
                label: 'Nước hoa',
                children: [
                    {
                        key: '3-1',
                        label: 'Nước hoa nam',
                    },
                    {
                        key: '3-2',
                        label: 'Nước hoa nữ',
                    },
                ],
            },
        ]}
    />
);

const grooming = (
    <Menu
        items={[
            {
                key: '1',
                label: 'APESTOMEN',
            },
            {
                key: '2',
                label: 'APESTOMEN',
            },
            {
                key: '3',
                label: 'APESTOMEN',
            },
            {
                key: '4',
                label: 'APESTOMEN',
            },
            {
                key: '5',
                label: 'APESTOMEN',
            },
        ]}
    />
);

export default function Header() {
    const { profile, isLoggIn } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cartReducer);
    console.log('Check login', profile, isLoggIn);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <div className="header">
                <div className="header__text">
                    <h3>Miễn phí vận chuyển với các đơn hàng trên 300,000 VNĐ</h3>
                </div>
                <div className="header__contact">
                    <div className="header__contact--left">
                        <p>
                            LIÊN HỆ TƯ VẤN: <span>0123456789</span>
                        </p>
                        <p>
                            ĐỊA CHỈ: <span>84 QUANG TRUNG, HẢI CHÂU, ĐÀ NẴNG</span>
                        </p>
                    </div>
                    <div className="header__contact--right">
                        <ul>
                            <li>Về chúng tôi</li>
                            <li>Các câu hỏi - FAQ</li>
                            <li>Liên hệ</li>
                            <li className="socials__contact">
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faPhone} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header__sticky">
                    <div className="masthead">
                        <div className="masthead__logo">
                            <Link to="/">
                                <img
                                    src="https://clmensstore.com/wp-content/uploads/2022/02/Orange-Black-Bats-Happy-Halloween-Instagram-Post-1080-x-500-px-220-x-102-px.png"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className="masthead__search">
                            <Search
                                placeholder="input search text"
                                style={{
                                    width: 550,
                                }}
                            />
                            <span className="masthead__advise"></span>
                            <h3>TƯ VẤN TRỰC TIẾP</h3>
                        </div>
                        <div className="masthead__login">
                            {!isLoggIn ? (
                                <Button
                                    type="primary"
                                    shape="round"
                                    style={{ background: '#000', border: '1px solid #000' }}
                                    onClick={() => setModalVisible(true)}
                                >
                                    ĐĂNG NHẬP
                                </Button>
                            ) : (
                                <Button
                                    type="primary"
                                    shape="round"
                                    style={{ background: '#000', border: '1px solid #000' }}
                                >
                                    <Link to="/profile">{profile?.email?.slice(0, -10)}</Link>
                                </Button>
                            )}

                            <span className="line"></span>
                            <div className="cart">
                                <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    style={{ fontSize: '20px' }}
                                    onClick={() => setVisible(true)}
                                />
                                <span className="cart-number">{cart.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="drop__item">
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <UnorderedListOutlined />
                                        DANH MỤC CỬA HÀNG
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className="drop__item">
                            <Dropdown overlay={grooming}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        THƯƠNG HIỆU GROOMING
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className="drop__item">
                            <Dropdown overlay={grooming}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        THƯƠNG HIỆU NƯỚC HOA
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className="drop__item">
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        COMBO QUÀ TẶNG
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <RegisterForm isVisible={modalVisible} setModal={setModalVisible} />
            <SideDrawer drawerVisible={visible} setDrawerVisible={setVisible} />
        </>
    );
}
