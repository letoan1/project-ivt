/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../sass/_products.scss';
import ItemContent from '../components/Sale/ItemContent';
import { actGetProductsHome } from '../redux/actions/productAction';

import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Slider } from 'antd';

export default function ProductPage() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState(0);
    const { products } = useSelector((state) => state.productReducer);
    console.log(products);

    React.useEffect(() => {
        dispatch(actGetProductsHome());
    }, [dispatch]);

    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    const uniqueIds = [];

    const unique = products.filter((element) => {
        const isDuplicate = uniqueIds.includes(element.trademark);

        if (!isDuplicate) {
            uniqueIds.push(element.trademark);
            return true;
        }

        return false;
    });

    return (
        <div className="products">
            <div className="products__content">
                <div className="product__items">
                    {!!products?.length
                        ? products?.map((product) => (
                              <ItemContent key={product?.id} title={'THÊM VÀO GIỎ HÀNG'} product={product} />
                          ))
                        : 'No product'}
                </div>
                <div className="product__list">
                    <h4>LỌC THEO GIÁ</h4>
                    <Row>
                        <Col span={24}>
                            <Slider
                                min={0}
                                max={1500000}
                                onChange={onChange}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                            />
                        </Col>
                    </Row>
                    <h4>DANH MỤC SẢN PHẨM</h4>
                    <ul className="category__list">
                        {!!unique?.length
                            ? unique?.map((product) => (
                                  <li key={product?.id}>
                                      <a href="#">{product?.trademark}</a>
                                  </li>
                              ))
                            : 'No categories'}
                    </ul>
                </div>
            </div>
        </div>
    );
}
