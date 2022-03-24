import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
import indexPageReducer from './reducers/indexPageReducer';
// import favProductsReducer from './reducers/favProductsReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    customer: userReducer,
    cart: cartReducer,
    index: indexPageReducer,
    // favProducts: favProductsReducer
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;