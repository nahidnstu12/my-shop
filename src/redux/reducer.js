import * as ActionTypes from './ActionTypes';

const init ={
    products:[],
    cartItems :[],
    Keyword:""
}

const reducer = (state=init,action) =>{
    switch(action.type){
        case ActionTypes.SET_CART_ITEMS:
            return {
                ...state,
                cartItems:action.payload
            };
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products:action.payload
            };
        case ActionTypes.SET_SEARCH:
        return {
            ...state,
            Keyword:action.payload
        };
        default:
            return state;
    }
}
export default reducer;
