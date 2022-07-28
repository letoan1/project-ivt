import React from 'react';
import { Col, Row } from 'antd';
import { ShoppingCartOutlined, InboxOutlined, UserOutlined, DollarOutlined } from '@ant-design/icons';

const DashboardCard = () => {
    const style = {
        padding: '8px 15px',
        borderRadius: '7px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '5px 5px 5px #999',
    };
    return (
        <Row gutter={[16, { xs: 8, sm: 8, md: 16 }]}>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={6}>
                <div style={style} className="blue-card">
                    <div>
                        <p style={{ margin: 0, color: 'white' }}>Total Orders</p>
                        <strong style={{ color: 'white', fontSize: 32 }}>538</strong>
                    </div>
                    <div>
                        <ShoppingCartOutlined style={{ color: 'white', fontSize: 40, fontWeight: 900 }} />
                    </div>
                </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={6}>
                <div style={style} className="green-card">
                    <div>
                        <p style={{ margin: 0, color: 'white' }}>Total Products</p>
                        <strong style={{ color: 'white', fontSize: 32 }}>3790</strong>
                    </div>
                    <div>
                        <InboxOutlined style={{ color: 'white', fontSize: 40, fontWeight: 900 }} />
                    </div>
                </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={6}>
                <div style={style} className="yellow-card">
                    <div>
                        <p style={{ margin: 0, color: 'black' }}>Total Users</p>
                        <strong style={{ color: 'black', fontSize: 32 }}>187</strong>
                    </div>
                    <div>
                        <UserOutlined style={{ color: 'black', fontSize: 40, fontWeight: 900 }} />
                    </div>
                </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={6}>
                <div style={style} className="red-card">
                    <div>
                        <p style={{ margin: 0, color: 'white' }}>Revenue</p>
                        <strong style={{ color: 'white', fontSize: 32 }}>$89,000</strong>
                    </div>
                    <div>
                        <DollarOutlined style={{ color: 'white', fontSize: 40, fontWeight: 900 }} />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default DashboardCard;
