import React, { useState } from 'react';
import { Typography, Select, Row, Col } from 'antd';
import OrderPerMonth from '../../chart/OrderPerMonth';
import OrderInMonth from '../../chart/OrderInMonth';
import OrderRevernueInMonth from '../../chart/OrderRevernueInMonth';
import OrderMap from '../../chart/OrderMap';

const Dashboard = () => {
    const [month, setMonth] = useState(1);
    const handleChange = (value) => {
        setMonth(+value);
    };

    return (
        <div className="dashboard">
            <Row justify="start">
                <Col span={14}>
                    <div
                        style={{
                            borderRadius: 10,
                            boxShadow: '5px 5px 10px #ccc',
                            padding: '12px 20px',
                            background: '#001529',
                        }}
                    >
                        <OrderPerMonth />
                        <Typography.Title
                            level={4}
                            style={{
                                textAlign: 'center',
                                margin: 10,
                                color: 'white',
                            }}
                        >
                            Volume of products sold per month
                        </Typography.Title>
                    </div>
                </Col>
                <Col span={10}>
                    <div
                        style={{
                            borderRadius: 10,
                            boxShadow: '5px 5px 10px #ccc',
                            padding: '20px 20px',
                            marginLeft: 10,
                            background: '#001529',
                        }}
                    >
                        <Select
                            placeholder="Select order's month"
                            style={{
                                width: 250,
                                marginLeft: 50,
                            }}
                            onChange={handleChange}
                        >
                            <Select.Option value="1">January</Select.Option>
                            <Select.Option value="2">February</Select.Option>
                            <Select.Option value="3">March</Select.Option>
                            <Select.Option value="4">April</Select.Option>
                            <Select.Option value="5">May</Select.Option>
                            <Select.Option value="6">June</Select.Option>
                            <Select.Option value="7">July</Select.Option>
                            <Select.Option value="8">August</Select.Option>
                            <Select.Option value="9">September</Select.Option>
                            <Select.Option value="10">October</Select.Option>
                            <Select.Option value="11">November</Select.Option>
                            <Select.Option value="12">December</Select.Option>
                        </Select>
                        <br />
                        <OrderInMonth month={month} />
                    </div>
                </Col>
            </Row>
            <div
                className="revenue-per-month"
                style={{ background: '#001529', marginTop: 20, borderRadius: 10, padding: 20 }}
            >
                <OrderRevernueInMonth />
                <Typography.Title
                    level={4}
                    style={{
                        textAlign: 'center',
                        margin: 10,
                        color: 'white',
                    }}
                >
                    Number of order and revenue by month
                </Typography.Title>
            </div>
            {/* <OrderMap /> */}
        </div>
    );
};

export default Dashboard;
