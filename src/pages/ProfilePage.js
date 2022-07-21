import React from 'react';
import { Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { actLogout } from '../redux/actions/authAction';
import '../sass/_profile.scss';
import {
    CreditCardOutlined,
    HeartOutlined,
    IdcardOutlined,
    ShoppingCartOutlined,
    TrophyOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

export default function ProfilePage() {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.auth);
    const history = useHistory();

    const handleLogOut = () => {
        dispatch(actLogout());
        history.push('/');
    };

    return (
        <div className="profile">
            <div className="profile-container">
                <div className="profile__info">
                    <div className="profile__info-avatar">
                        <img
                            src="https://i.pinimg.com/236x/31/50/eb/3150eb1f27c9ccb57b1dd7933cb70e8a.jpg"
                            alt="avatar"
                        />
                        <div className="profile__utilities">
                            <p>{profile?.email?.slice(0, -10)}</p>
                            <p>{profile.mail}</p>
                            <Button
                                type="primary"
                                style={{ background: '#000', border: '1px solid #000' }}
                                onClick={handleLogOut}
                            >
                                ĐĂNG XUẤT
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="profile__content">
                    <div className="profile__grid">
                        <Card>
                            <span className="icon">
                                <ShoppingCartOutlined />
                            </span>
                            <p className="profile__text">Đơn hàng của bạn</p>
                            <p>Kiểm tra các đơn hàng mà bạn đã từng đặt tại Website CL Men's Store</p>
                        </Card>
                        <Card>
                            <span className="icon">
                                <UserOutlined />
                            </span>
                            <p className="profile__text">Thay đổi thông tin</p>
                            <p>Chỉnh sửa lại thông tin, mật khẩu của bạn</p>
                        </Card>
                        <Card>
                            <span className="icon">
                                <IdcardOutlined />
                            </span>
                            <p className="profile__text">Cập nhật địa chỉ nhận hàng</p>
                            <p>Thay đổi và cập nhật lại địa chỉ nhận hàng của bạn</p>
                        </Card>
                        <Card>
                            <span className="icon">
                                <CreditCardOutlined />
                            </span>
                            <p className="profile__text">Thẻ thành viên</p>
                            <p>Kiểm tra các đơn hàng mà bạn đã từng đặt tại Website CL Men's Store</p>
                        </Card>
                        <Card>
                            <span className="icon">
                                <TrophyOutlined />
                            </span>
                            <p className="profile__text">Điểm tích lũy</p>
                            <p>Chức năng chưa ra mắt, vui lòng đợi thêm</p>
                        </Card>
                        <Card>
                            <span className="icon">
                                <HeartOutlined />
                            </span>
                            <p className="profile__text">Danh sách yêu thích</p>
                            <p>Chức năng tạm thời chưa ra mắt, xin vui lòng đợi thêm...</p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
