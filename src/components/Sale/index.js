import React from 'react';
import ListItem from './ListItem';

import '../../sass/_sale.scss';

export default function Sale({ tagFil, products, isLoading }) {
    return (
        <section className="sale">
            <div className="sale__box">
                <div className="sale__box--title">
                    <span>MUA 1 TẶNG 1 - GIÁ CHỈ 600K CHO 2 SẢN PHẨM</span>
                </div>
                <div className="sale__box--item">
                    <ListItem products={products} tagFil={tagFil} isLoading={isLoading} />
                </div>
            </div>
        </section>
    );
}
