import { ADD_TO_CART, GET_CART, UPDATE_CART_QTY } from './types';
import {AjaxProviderPost, AjaxProviderGet} from '../providers/AjaxProvider';
import {Dispatch} from 'redux';

interface CartObject {
    id_product: number;
    id_product_attribute: number;
    quantity?: number;
    op?: string;
}

export const addToCart = (payload:CartObject) => {
    return async (dispatch:Dispatch) => {
        let data = {
            id_product: payload.id_product,
            id_product_attribute: payload.id_product_attribute,
            quantity: payload.quantity ? payload.quantity : 1,
            add: 1
        };
        let addToCart = await AjaxProviderPost('/cart', data);
        dispatch(dispatchAddToCart(addToCart));
    }
}

export const dispatchAddToCart = (payload:any) => (
    {
        type: ADD_TO_CART,
        payload: payload
    }
);

export const getCart = () => {
    return async (dispatch:Dispatch) => {
        let SummaryCart = await AjaxProviderGet('/cart');
        dispatch(dispatchGetCart(SummaryCart));
    }
};

export const dispatchGetCart = (payload:any) => (
    {
        type: GET_CART,
        payload: payload
    }
);

export const updateQty = (payload:CartObject) => {
    return async (dispatch:Dispatch) => {
        let data = {
            id_product: payload.id_product,
            id_product_attribute: payload.id_product_attribute,
            quantity: payload.quantity ? payload.quantity : 1,
            add: 1,
            op: payload.op ? payload.op : 'up'
        };
        let updateQty = await AjaxProviderPost('/cart', data);
        dispatch(dispatchUpdateQty(updateQty));
    }
}

export const dispatchUpdateQty = (payload:any) => (
    {
        type: UPDATE_CART_QTY,
        payload: payload
    }
);
