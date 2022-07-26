import React from 'react';
import { Pie } from '@ant-design/plots';
import { OrderData } from './Data';

const OrderInMonth = ({ month }) => {
    const dataInMonth = OrderData.filter((data) => data.month === month);
    const orderInMonth = dataInMonth.map((data) => data.order);
    const totalOrder = orderInMonth.reduce((total, order) => total + order, 0);
    const percentOrderData = dataInMonth.map((data) => {
        return {
            ...data,
            order: Number(((data.order / totalOrder) * 100).toFixed(2)),
        };
    });

    const data = [...percentOrderData];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'order',
        colorField: 'brand',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: 22,
                    color: '#fff',
                },
                content: 'Order percent in Month (%)',
            },
        },
    };
    return <Pie {...config} />;
};

export default OrderInMonth;
