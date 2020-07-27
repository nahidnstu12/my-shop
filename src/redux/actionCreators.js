import * as ActionTypes from './ActionTypes';

export const setCartItems = items => {
    return {
        type:ActionTypes.SET_CART_ITEMS,
        payload:items
    }
}

export const setProducts = items => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:items
    }
}

export const setKeyword = items => {
    return {
        type:ActionTypes.SET_SEARCH,
        payload:items
    }
}