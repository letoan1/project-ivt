import React from 'react';

import Carousel from '../../components/Carousel';
import Divider from '../../components/Divider';
import TabsProduct from '../../components/Tabs';
import Sale from '../../components/Sale';
import Voucher from '../../components/Voucher';
import Slide from '../../components/Slide';

import { useSelector, useDispatch } from 'react-redux';
import { actGetProductsHome } from '../../redux/actions/productAction';

export default function HomePage() {
    const dispatch = useDispatch();
    const { products, productSales, productBestSellers, productNews, isLoading } = useSelector(
        (state) => state.productReducer,
    );

    React.useEffect(() => {
        dispatch(actGetProductsHome());
    }, [dispatch]);

    return (
        <>
            <Slide />
            <div className="container">
                <Sale productSales={productSales} isLoading={isLoading} />
                <Voucher />
                <Divider divider={'SẢN PHẨM MỚI NHẤT'} />
                <Carousel tagFil={'new'} products={products} />
                <Divider divider={'SẢN PHẨM BÁN CHẠY'} />
                <Carousel tagFil={'best-seller'} products={products} />
                <Divider divider={'SẢN PHẨM KHUYẾN MÃI'} />
                <Carousel tagFil={'sale'} products={products} />
                <Divider divider={'SẢN PHẨM GỢI Ý'} />
                <TabsProduct
                    productSales={productSales}
                    productBestSellers={productBestSellers}
                    productNews={productNews}
                />
            </div>
        </>
    );
}