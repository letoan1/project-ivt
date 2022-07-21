import ItemContent from '../Sale/ItemContent';
import '../../sass/_tabs.scss';

import { Tabs } from 'antd';
import React from 'react';
const { TabPane } = Tabs;

export default function TabsProduct({ productSales, productBestSellers, productNews }) {
    return (
        <div className="tabs-product">
            <Tabs defaultActiveKey="1">
                <TabPane tab="SÁP VUỐT TÓC" key="1" className="tabs-grid">
                    {!!productSales?.length
                        ? productSales?.map((product) => (
                              <ItemContent key={product.id} title={'THÊM VÀO GIỎ HÀNG'} product={product} />
                          ))
                        : 'No product'}
                </TabPane>
                <TabPane tab="POMADE" key="2" className="tabs-grid">
                    {!!productBestSellers?.length
                        ? productBestSellers?.map((product) => (
                              <ItemContent key={product.id} title={'THÊM VÀO GIỎ HÀNG'} product={product} />
                          ))
                        : 'No product'}
                </TabPane>
                <TabPane tab="NƯỚC HOA" key="3" className="tabs-grid">
                    {!!productNews?.length
                        ? productNews?.map((product) => (
                              <ItemContent key={product.id} title={'THÊM VÀO GIỎ HÀNG'} product={product} />
                          ))
                        : 'No product'}
                </TabPane>
            </Tabs>
        </div>
    );
}
