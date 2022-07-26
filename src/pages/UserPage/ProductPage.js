/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../sass/_products.scss';
import ItemContent from '../../components/Sale/ItemContent';
import { actGetProductsHome } from '../../redux/actions/productAction';

import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Slider } from 'antd';

export default function ProductPage() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState(0);
    const { products } = useSelector((state) => state.productReducer);
    const [prodBrand, setProdBrand] = React.useState([]);
    const [visibleCheck, setVisibleCheck] = React.useState(true);
    const liRef = React.useRef();

    const check = (brand) => {
        const result = products.filter((product) => product.trademark === brand);
        setVisibleCheck(false);
        setProdBrand(result);
    };

    const resetStatus = () => {
        setVisibleCheck(true);
    };

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

    const marks = {
        0: {
            style: {
                color: '#255c45',
            },
            label: (
                <strong className="price-left">
                    {inputValue[0]?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </strong>
            ),
        },

        10000000: {
            style: {
                color: '#255c45',
            },
            label: (
                <strong className="price-right">
                    {inputValue[1]?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                </strong>
            ),
        },
    };

    return (
        <div className="products">
            <div className="products__content">
                {visibleCheck ? (
                    <div className="product__items">
                        {!!products.length
                            ? products
                                  .filter((product) => product.price > parseInt(inputValue))
                                  .map((product) => <ItemContent key={product?.id} product={product} />)
                            : 'Không có sản phẩm !'}
                    </div>
                ) : (
                    <div className="product__items">
                        {!!prodBrand.length
                            ? prodBrand
                                  .filter((product) => product.price > parseInt(inputValue))
                                  .map((product) => <ItemContent key={product?.id} product={product} />)
                            : 'Không có sản phẩm !'}
                    </div>
                )}

                <div className="product__list">
                    <h4>LỌC THEO GIÁ</h4>
                    <Row>
                        <Col span={24}>
                            <Slider
                                range
                                defaultValue={[0, 200000]}
                                min={0}
                                step={5000}
                                max={10000000}
                                onChange={onChange}
                                marks={marks}
                            />
                        </Col>
                    </Row>
                    <h4>DANH MỤC SẢN PHẨM</h4>
                    <ul className="category__list">
                        <li onClick={resetStatus}>
                            {' '}
                            <a href="#">ALL</a>
                        </li>
                        {!!unique?.length
                            ? unique?.map((product) => (
                                  <>
                                      <li key={product?.id} ref={liRef} onClick={() => check(product?.trademark)}>
                                          <a href="#">{product?.trademark}</a>
                                      </li>
                                  </>
                              ))
                            : 'Danh mục sản phẩm trống !'}
                    </ul>
                </div>
            </div>
        </div>
    );
}
