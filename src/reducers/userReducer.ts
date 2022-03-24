import { VERIFY_USER, LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../actions/types';
import localStorage from '../localstorage/LocalStorage';

const initialState = {
    customer: {},
    isLoggedIn: false,
    errors: [],
    loading: true
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case VERIFY_USER:
            if (action.payload.success) {
                return {
                    ...state,
                    customer: action.payload.result.customer,
                    isLoggedIn: true,
                    loading: false,
                }
            } else {
                return {...state, loading: false};
            }
        case LOGOUT_USER:
            localStorage.storeJwt('');
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
            }
        case LOGIN_USER:
            if (action.payload.success) {
                localStorage.storeJwt(action.payload.result.token);
                return {
                    ...state,
                    customer: action.payload.result.customer,
                    isLoggedIn: true,
                    loading: false,
                }
            } else {
                return {
                    ...state,
                    errors: action.payload.errors,
                    loading: false,
                }
            }
        case REGISTER_USER:
            if (action.payload.success) {
                localStorage.storeJwt(action.payload.result.customer.token);
                return {
                    ...state,
                    customer: action.payload.result.customer,
                    isLoggedIn: true,
                    loading: false,
                }
            } else {
                return {
                    ...state,
                    errors: action.payload.errors,
                    loading: false,
                }
            }
        default:
            return state;
    }
}
export default userReducer;