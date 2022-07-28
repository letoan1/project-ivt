import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import ItemContent from '../Sale/ItemContent';

import '../../sass/_carousel.scss';

export const filTagProduct = (tagFil, products) => {
    const filterTagsName = products?.filter((product) => product?.tags.includes(tagFil));
    const renderTag = tagFil ? filterTagsName : products;
    return renderTag;
};

export default function Carousel({ tagFil, products }) {
    return (
        <div className="carousel">
            <Swiper
                slidesPerView={5}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {!!filTagProduct(tagFil, products)?.length
                    ? filTagProduct(tagFil, products)?.map((product) => (
                          <SwiperSlide key={product?.id}>
                              <ItemContent product={product} title={'THÊM VÀO GIỎ HÀNG'} />
                          </SwiperSlide>
                      ))
                    : 'No product'}
            </Swiper>
        </div>
    );
}
