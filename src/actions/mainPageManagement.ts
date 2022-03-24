import { GET_INDEX_PAGE } from './types';
import {AjaxProviderGet} from '../providers/AjaxProvider';
import {Dispatch} from 'redux';

export const getMainPageData = () => {
    return async (dispatch:Dispatch) => {
        let data = await AjaxProviderGet('/indexpage');
        dispatch(dispatchGetMainPageData(data));
    }
}

export const dispatchGetMainPageData = (payload:any) => (
    {
        type: GET_INDEX_PAGE,
        payload: payload
    }
);

