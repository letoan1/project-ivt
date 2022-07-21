import React from 'react';
import { Button, InputNumber, message, Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import useCustomeHistory from '../hooks/useCustomHistory';

import { actGetProductById } from '../redux/actions/productAction';
import '../sass/_button.scss';
import Endow from '../components/Endow';
import '../sass/_product-detail.scss';
import { actAddMoreToCartSuccess } from '../redux/actions/cartAction';

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { productDetail } = useSelector((state) => state.productReducer);
    console.log(productDetail);
    const [chooseQuantity, setChooseQuantity] = React.useState(null);

    const history = useCustomeHistory();

    const handleChangeQuantity = (value) => {
        setChooseQuantity(value);
    };

    const handleClickBuy = () => {
        dispatch(actAddMoreToCartSuccess({ product: productDetail, chooseQuantity }));
        setChooseQuantity(null);
        message.success('Đã thêm vào giỏ hàng !');
    };

    React.useEffect(() => {
        const { location } = history;
        const id = location.pathname.split('/')[2];
        dispatch(actGetProductById(id));
        // eslint-disable-next-line
    }, [dispatch, history.location.pathname]);

    return (
        <div className="product__detail">
            <div className="product__detail-row">
                <div className="product__detail-img">
                    <img src={productDetail?.img} alt={productDetail?.title} />
                </div>
                <div className="product__detail-desc">
                    <h1>{productDetail?.title}</h1>
                    <span className="price">
                        {productDetail?.price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </span>
                    <p>
                        <strong>Thương hiệu:</strong> {productDetail?.trademark}
                    </p>
                    <p>
                        <strong>Dung tích:</strong> {productDetail?.capacity}
                    </p>
                    <p>
                        <strong>Sản xuất:</strong> {productDetail?.produce}
                    </p>

                    <form>
                        <InputNumber
                            min={1}
                            max={10}
                            value={chooseQuantity}
                            onChange={handleChangeQuantity}
                            className="input-number"
                        />
                        <Button className="btn-add-to-card" onClick={handleClickBuy}>
                            THÊM VÀO GIỎ HÀNG
                        </Button>
                    </form>

                    <div className="product__detail-endow">
                        <Endow
                            url={'https://clmensstore.com/wp-content/uploads/2022/06/Chinh-hang-300x300.png'}
                            mainText={'Cam kết chính hãng'}
                            subText={'Hoàn tiền 333% nếu phát hiện hàng giả'}
                        />
                        <Endow
                            url={
                                'https://clmensstore.com/wp-content/uploads/2022/06/Thiet-ke-chua-co-ten-8-300x300.png'
                            }
                            mainText={'Miễn phí vận chuyển'}
                            subText={'Các đơn hàng trên 300K'}
                        />
                        <Endow
                            url={
                                'https://clmensstore.com/wp-content/uploads/2022/06/Thiet-ke-chua-co-ten-12-300x300.png'
                            }
                            mainText={'Tư vấn trực tiếp'}
                            subText={'Chat trực tiếp với tư vấn viên'}
                        />
                    </div>
                </div>
            </div>
            <div className="product__detail-info">
                <div className="detail__text">
                    <span>THÔNG TIN SẢN PHẨM</span>
                </div>
                <div className="detail__desc">
                    <span>Nước hoa Acqua di Gio Absolu by Giorgio Armani – Di sản của văn hóa trung đông</span>
                    <p>{productDetail?.desc}</p>
                    <span>Thông tin về nước hoa Acqua di Gio Absolu by Giorgio Armani</span>
                    <ul>
                        <li>Nhóm nước hoa: Hương biển, Hương gỗ</li>
                        <li>Giới tính: Nam</li>
                        <li>Năm ra mắt: 2018</li>
                        <li>Nhà pha chế: Alberto Morrilas</li>
                        <li>Nồng độ: EDP</li>
                    </ul>

                    <span>Đánh giá {productDetail?.title}</span>
                    <div className="rate">
                        <Rate />
                    </div>
                </div>
            </div>
        </div>
    );
}
