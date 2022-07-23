/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/index';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './sass/_layout.scss';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import ProfilePage from './pages/ProfilePage';
import CartDetail from './pages/CartDetail';
import CheckOutPage from './pages/CheckOutPage';
import { AdminPage } from './pages';
import { ROUTES } from './constants/Router';
import { actGetProfile } from './redux/actions/authAction';
import OrderedPage from './pages/OrderedPage';

function App() {
    const dispatch = useDispatch();
    const { isLoggIn } = useSelector((state) => state.auth);

    const accessToken = JSON.parse(localStorage.getItem('accessToken')) || null;
    console.log('accessToken', accessToken);

    React.useEffect(() => {
        if (accessToken) {
            dispatch(actGetProfile(accessToken));
        }
    }, [dispatch]);

    return (
        <div className="App" style={{ position: 'relative' }}>
            {/* <Header /> */}
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
                {isLoggIn ? (
                    <Route exact path="/profile">
                        <ProfilePage />
                    </Route>
                ) : null}
                <Route path="/cart-detail">
                    <CartDetail />
                </Route>
                <Route path="/checkout">
                    <CheckOutPage />
                </Route>
                <Route path={ROUTES.DASHBOAR}>
                    <AdminPage />
                </Route>
                <Route path="/profile/ordered">
                    <OrderedPage />
                </Route>
            </Switch>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
