import React from 'react';
import { Line } from '@ant-design/plots';
import { RevenueData } from './Data';

const RevenuePerMonth = () => {
    const data = [...RevenueData];
    const config = {
        data,
        padding: 'auto',
        xField: 'month',
        yField: 'revenue',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
    };

    return <Line {...config} />;
};

export default RevenuePerMonth;
