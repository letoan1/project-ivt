import { Button, Table } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actGetOrderUser } from '../redux/actions/orderAction';
import '../sass/_ordered.scss';
import '../sass/_button.scss';
import { Link } from 'react-router-dom';

export default function OrderedPage() {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.auth);
    const { orders } = useSelector((state) => state.orderReducer);

    React.useEffect(() => {
        dispatch(actGetOrderUser(profile.id));
        // eslint-disable-next-line
    }, []);

    const columns = [
        {
            title: 'SẢN PHẨM',
            dataIndex: 'products',
            key: 'products',
            render: (_, item) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={item?.img} alt={item?.title} width="60px" height="60px" style={{ margin: '0 10px' }} />
                    <p>{item?.title}</p>
                </div>
            ),
        },
        {
            title: 'ĐƠN GIÁ',
            dataIndex: 'price',
            key: 'price',
            render: (_, item) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>{item?.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                </div>
            ),
        },
        {
            title: 'SỐ LƯỢNG',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_, item) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>{item?.quantity}</p>
                </div>
            ),
        },
    ];

    return (
        <div className="ordered-page">
            {!!orders?.length ? (
                orders?.map((order) => (
                    <div key={order?.id} className="order">
                        <h3>Ngày mua: {order?.createAt}</h3>
                        <Table dataSource={order?.cart} columns={columns} pagination={false} />
                        <h3 style={{ paddingTop: '15px' }}>
                            Tổng tiền:{' '}
                            {order?.totalMoney.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                        </h3>
                    </div>
                ))
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <Link to="/products">
                        <Button className="btn-add-to-card ">TÌM CÁC SẢN PHẨM</Button>
                    </Link>
                    <h3>Bạn chưa có đơn hàng nào !</h3>
                </div>
            )}
        </div>
    );
}
