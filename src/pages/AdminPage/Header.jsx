import React from 'react';
import { Avatar, Image, message, Dropdown, Menu, Space } from 'antd';
import { SettingOutlined, LogoutOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const Heading = () => {
    let history = useHistory();
    const handleMenuClick = (e) => {
        console.log('click', e.key);
        if (e.key === '1') {
            message.success('Change Avatar Success!');
        } else if (e.key === '2') {
            history.push('/');
        }
    };
    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Change Avatar',
                    key: '1',
                    icon: <SettingOutlined />,
                },
                {
                    label: 'Logout',
                    key: '2',
                    icon: <LogoutOutlined />,
                },
            ]}
        />
    );
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <img
                    src="https://clmensstore.com/wp-content/uploads/2018/07/37717589_818810961642335_8791362317594918912_n.png"
                    style={{ width: 80 }}
                    alt=""
                />
            </div>
            <div>
                <Avatar
                    src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                    style={{ width: 32 }}
                />
                <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" arrow>
                    <span>
                        <Space>
                            <span style={{ color: '#fff', fontSize: 18, marginLeft: 10, cursor: 'pointer' }}>
                                Admintrator
                            </span>
                            <CaretDownOutlined style={{ color: '#fff' }} />
                        </Space>
                    </span>
                </Dropdown>
            </div>
        </div>
    );
};

export default Heading;
