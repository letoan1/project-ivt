import React from 'react';
import { Button, Card, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../sass/_button.scss';
import { actAddToCartSuccess } from '../../redux/actions/cartAction';
const { Meta } = Card;

export default function ItemContent({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(actAddToCartSuccess(product));
        message.success('Đã thêm vào giỏ hàng !');
    };
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/products/${id}`);
    };

    return (
        <div className="card-content">
            <Card
                hoverable
                style={{
                    width: 220,
                }}
                cover={
                    <img
                        alt="example"
                        src={product?.img}
                        style={{ maxHeight: '220px', minHeight: '220px' }}
                        onClick={() => handleClick(product?.id)}
                    />
                }
            >
                <Meta
                    title={product?.title}
                    description={product?.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                />
                <Button className="btn-add-to-card" onClick={() => handleAddToCart(product)}>
                    THÊM VÀO GIỎ HÀNG
                </Button>
                {/* <ButtonPrimary title={title} product={product} /> */}
            </Card>
        </div>
    );
}
