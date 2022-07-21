/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Table, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowLeftOutlined, CloseCircleOutlined } from '@ant-design/icons';

import '../sass/_button.scss';
import '../sass/_cart-detail.scss';
import { actRemoveToCartSuccess } from '../redux/actions/cartAction';
import { Link, useHistory } from 'react-router-dom';

export default function CartDetail() {
    const { cart } = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDeleteCart = (item) => {
        dispatch(actRemoveToCartSuccess({ id: item }));
    };

    const handleClick = (id) => {
        history.push(`/products/${id}`);
    };

    const totalMoney = cart.reduce((total, product) => {
        total += product?.quantity * product?.price;
        return total;
    }, 0);

    const shipping = 15000;

    const total = totalMoney + shipping;

    const columns = [
        {
            title: 'SẢN PHẨM',
            dataIndex: 'title',
            key: 'title',
            render: (_, item) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Popconfirm
                        placement="top"
                        title="Bạn chắc chắn muốn xóa sản phẩm này không ?"
                        okText="Có"
                        cancelText="Không"
                        onConfirm={() => handleDeleteCart(item?.id)}
                    >
                        <CloseCircleOutlined style={{ fontSize: '20px' }} />
                    </Popconfirm>

                    <div onClick={() => handleClick(item?.id)} style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={item?.img}
                            alt={item?.title}
                            width="60px"
                            height="60px"
                            style={{ margin: '0 10px' }}
                        />
                        <p>{item?.title}</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'GIÁ',
            dataIndex: 'price',
            key: 'price',
            render: (_, item) => (
                <span key={item?.id}>
                    {item?.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </span>
            ),
        },
        {
            title: 'SỐ LƯỢNG',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_, item) => <span key={item?.id}>{item?.quantity}</span>,
        },
        {
            title: 'TẠM TÍNH',
            dataIndex: 'total',
            key: 'total',
            render: (_, item) => (
                <span key={item?.id}>
                    {(item?.quantity * item?.price)?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </span>
            ),
        },
    ];

    return (
        <div className="cart_detail">
            <div className="cart__detail-col">
                <div className="col__product">
                    <Table columns={columns} dataSource={cart} pagination={false} />
                    <Link to="/products">
                        <Button className="btn-add-to-card">
                            <ArrowLeftOutlined /> TIẾP TỤC XEM SẢN PHẨM
                        </Button>
                    </Link>
                </div>
                <div className="col__cart">
                    <h3>CỘNG GIỎ HÀNG</h3>
                    <p>
                        <strong>Tạm tính:</strong>{' '}
                        {totalMoney?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                    <p>
                        <strong>Giao hàng:</strong> Nhập địa chỉ của bạn để xem các tùy chọn vận chuyển <br />
                        Tính phí giao hàng
                    </p>
                    <p>
                        <strong>Tổng:</strong> {total?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </p>
                    <Link to="/checkout">
                        <Button className="btn-add-to-card">TIẾN HÀNH THANH TOÁN</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
