import { all } from '@redux-saga/core/effects';
import productSaga from './productSaga';
import userSaga from './userSaga';
import authSaga from './authSaga';
import orderSaga from './orderSaga';

function* rootSaga() {
    yield all([...productSaga, ...userSaga, ...authSaga, ...orderSaga]);
}

export default rootSaga;
