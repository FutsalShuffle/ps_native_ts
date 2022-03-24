import { ADD_TO_CART, GET_CART, UPDATE_CART_QTY } from '../actions/types';

const initialState = {
    cart: [],
    errors: [],
    loading: true
}

const cartReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (action.payload.success) {
                return {
                    cart: action.payload.result,
                    loading: false
                }
            }
            return {
                ...state,
                errors: action.payload.errors,
                loading: false
            }
        case GET_CART:
            if (action.payload.success) {
                return {
                    cart: action.payload.result,
                    loading: false
                }
            }
            return {...state, loading: false};
        case UPDATE_CART_QTY:
            if (action.payload.success) {
                return {
                    cart: action.payload.result,
                    loading: false
                }
            } 
            return {
                ...state,
                errors: action.payload.errors,
                loading: false
            }
        default:
            return state;

    }
}
export default cartReducer;