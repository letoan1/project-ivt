import { call, put, takeLatest, takeLeading } from '@redux-saga/core/effects';
import { createUser, updateUser, getAllUser } from '../../apis/usersApi';
import { UserTypes } from '../constants';
import { actGetProfileSuccess } from '../../redux/actions/authAction';
import {
    actCreateUserFail,
    actCreateUserSuccess,
    actSetLoading,
    actClearNotification,
    actUpdateUserSuccess,
    actGetUsersSuccess,
    actGetUsersFail,
} from '../../redux/actions/userAction';

function* onCreateUser({ payload }) {
    yield put(actSetLoading());
    try {
        const res = yield call(createUser, payload);
        if (res.status === 201) {
            yield put(actCreateUserSuccess());
        } else throw new Error();
    } catch (error) {
        yield put(actCreateUserFail());
    } finally {
        yield put(actClearNotification());
    }
}

function* getAllUsers() {
    yield put(actSetLoading());
    try {
        const data = yield call(getAllUser());
        console.log('>>>>>res', data);
        if (data.status === 201) {
            yield put(actGetUsersSuccess(data));
        } else throw new Error();
    } catch (error) {
        yield put(actGetUsersFail());
    } finally {
        yield put(actClearNotification());
    }
}

function* onUpdateUser({ payload }) {
    yield put(actSetLoading());
    try {
        const id = payload.id;
        const user = payload.payload;
        const res = yield call(updateUser, id, user);
        if (res.status === 200) {
            const profile = res.data;
            yield put(actUpdateUserSuccess());
            yield put(actGetProfileSuccess({ profile }));
        } else throw new Error();
    } catch (error) {
    } finally {
        yield put(actClearNotification());
    }
}

function* watchOnUpdateUser() {
    yield takeLatest(UserTypes.UPDATE_USER, onUpdateUser);
}

function* watchCreateUser() {
    yield takeLeading(UserTypes.CREATE, onCreateUser);
}

function* watchGetUsers() {
    yield takeLeading(UserTypes.GET_ALL_USERS, getAllUsers);
}

const Test = watchGetUsers();
console.log('>>>>test saga', Test.next());
console.log('>>>>test saga', Test.next());
console.log('>>>>test saga', Test.next());
console.log('>>>>test saga', Test.next());
console.log('>>>>test saga', Test.next());
// eslint-disable-next-line
export default [watchCreateUser(), watchOnUpdateUser(), watchGetUsers()];
