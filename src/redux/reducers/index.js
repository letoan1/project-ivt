import { combineReducers } from 'redux';
import productReducer from './productReducer';
import { userReducer } from './userReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';

const appReducers = combineReducers({
    productReducer: productReducer,
    user: userReducer,
    auth: authReducer,
    cartReducer: cartReducer,
});

export default appReducers;
