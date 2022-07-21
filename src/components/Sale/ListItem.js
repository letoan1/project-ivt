import React from 'react';
import ItemContent from './ItemContent';

export default function ListItem({ productSales }) {
    const productLimit = productSales?.slice(0, 5);
    return (
        <>
            {!!productLimit?.length
                ? productLimit?.map((product) => (
                      <ItemContent key={product.id} title={'THÊM VÀO GIỎ HÀNG'} product={product} />
                  ))
                : 'No product'}
        </>
    );
}
