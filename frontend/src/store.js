import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";

const initialstate ={};
const reducer =combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialstate, composeEnhancer(applyMiddleware(thunk)));

export default store;