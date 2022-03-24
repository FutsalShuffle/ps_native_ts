import {VERIFY_USER, LOGIN_USER, REGISTER_USER, LOGOUT_USER} from './types';
import {AjaxProviderPost, AjaxProviderGet} from '../providers/AjaxProvider';
import {Dispatch} from 'redux';

interface LoginPayload {
    email: string;
    password: string;
}

interface RegisterPayload {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

export const loginUser = (payload: LoginPayload) => {
    return async (dispatch: Dispatch) => {
        let data: Object = {
            'email': payload.email,
            'password': payload.password
        };
        let user = await AjaxProviderPost('/login', payload);
        dispatch(dispatchLoginUser(user));
    }
}

export const registerUser = (payload: RegisterPayload) => {
    return async (dispatch: Dispatch) => {
        let data: Object = {
            'email': payload.email,
            'password': payload.password,
            'firstname': payload.firstname,
            'lastname': payload.lastname
        };
        let user = await AjaxProviderPost('/register', payload);
        dispatch(dispatchRegisterUser(user));
    }
}

export const verifyUser = () => {
    return async (dispatch: Dispatch) => {
        let user = await AjaxProviderGet('/verify');
        dispatch(dispatchVerifyUser(user));
    }
}

export const dispatchLoginUser = (payload : any) => ({type: LOGIN_USER, payload: payload});

export const dispatchRegisterUser = (payload : any) => ({type: REGISTER_USER, payload: payload});

export const dispatchVerifyUser = (payload : any) => ({type: VERIFY_USER, payload: payload});

export const logoutUser = () => ({type: LOGOUT_USER});
