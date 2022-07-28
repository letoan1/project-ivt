import { UserTypes } from '../constants';

const initialState = {
    isLoading: false,
    status: '',
    users: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserTypes.GET_USERS_SUCCESS: {
            console.log('>>>>payload', action.payload);
            return { status: 'getSucess', isLoading: false };
        }
        case UserTypes.GET_USERS_FAIL: {
            return { status: 'getFail', isLoading: false };
        }
        case UserTypes.CREATE_SUCCESS: {
            return { status: 'registerSucess', isLoading: false };
        }
        case UserTypes.CREATE_FAIL: {
            return { status: 'registerFail', isLoading: false };
        }
        case UserTypes.UPDATE_USER_SUCCESS: {
            return { status: 'updateSuccess', isLoading: false };
        }
        case UserTypes.UPDATE_USER_FAIL: {
            return { status: 'updateFail', isLoading: false };
        }
        case UserTypes.SET_IS_LOADING: {
            return { ...state, isLoading: true };
        }
        case UserTypes.CLEAR_NOTIFICATION: {
            return { ...initialState };
        }
        default:
            return { ...state };
    }
};
