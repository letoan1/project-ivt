/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Switch, Route, useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/index';
import Footer from './components/Footer';
import HomePage from './pages/UserPage/HomePage';
import './sass/_layout.scss';
import ProductPage from './pages/UserPage/ProductPage';
import ProductDetail from './pages/UserPage/ProductDetail';
import ProfilePage from './pages/UserPage/ProfilePage';
import CartDetail from './pages/UserPage/CartDetail';
import CheckOutPage from './pages/UserPage/CheckOutPage';
import { AdminPage } from './pages';
import { ROUTES } from './constants/Router';
import { actGetProfile } from './redux/actions/authAction';
import OrderedPage from './pages/UserPage/OrderedPage';
import ChangeProfilePage from './pages/UserPage/ChangeProfilePage';
import { UpOutlined } from '@ant-design/icons';
import AdminLoginPage from './pages/AdminPage/AdminLoginPage';
import PrivateRoute from './components/AdminPage/PrivateRoute';

function App() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isLoggIn } = useSelector((state) => state.auth);
    const [showGoToTop, setShowGoToTop] = React.useState(false);

    const isAdmin = Boolean(localStorage.getItem('admin_loggedIn'));
    const accessToken = JSON.parse(localStorage.getItem('accessToken')) || null;
    React.useEffect(() => {
        if (accessToken) {
            dispatch(actGetProfile(accessToken));
        }
    }, [dispatch]);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClickGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="App" style={{ position: 'relative' }}>
            {!isAdmin && <Header />}
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/products">
                    <ProductPage />
                </Route>
                <Route path="/products/:id">
                    <ProductDetail />
                </Route>
                <Route path="/cart-detail">
                    <CartDetail />
                </Route>
                <Route path="/checkout">
                    <CheckOutPage />
                </Route>
                <Route path={ROUTES.LOGIN.path}>
                    <AdminLoginPage />
                </Route>
                <PrivateRoute path={ROUTES.DASHBOARD.path}>
                    <AdminPage />
                </PrivateRoute>
                {isLoggIn ? (
                    <>
                        <Route exact path="/profile">
                            <ProfilePage />
                        </Route>
                        <Route path="/profile/ordered">
                            <OrderedPage />
                        </Route>
                        <Route path="/profile/change-profile">
                            <ChangeProfilePage />
                        </Route>
                    </>
                ) : (
                    <Redirect to="/"></Redirect>
                )}
            </Switch>
            <Footer />
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 50,
                        bottom: 20,
                        padding: 10,
                        backgroundColor: '#255c45',
                        border: 'none',
                        color: '#fff',
                    }}
                    onClick={() => handleClickGoToTop()}
                >
                    <UpOutlined />
                </button>
            )}
            {!isAdmin && <Footer />}
        </div>
    );
}

export default App;
