import { all } from '@redux-saga/core/effects';
import productSaga from './productSaga';
import userSaga from './userSaga';
import authSaga from './authSaga';

function* rootSaga() {
    yield all([...productSaga, ...userSaga, ...authSaga]);
}

export default rootSaga;
