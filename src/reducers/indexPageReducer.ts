import { GET_INDEX_PAGE } from '../actions/types';

const initialState = {
    featuredproducts: [],
    homeslider: [],
    loading: true
}

const indexPageReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_INDEX_PAGE:
            if (action.payload.success) {
                return {
                    ...action.payload.result,
                    loading: false
                }
            } else {
                return {
                    ...state,
                    loading: false
                }
            }
        default:
            return state;
    }
}
export default indexPageReducer;