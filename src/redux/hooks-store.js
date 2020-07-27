import React , {useReducer,createContext} from 'react';

const init ={
    products:[],
    cartItems :[],
    Keyword:""
}

const store = createContext(init);
const {Provider} = store;

const reducer = (state,action) =>{
    switch(action.type){
        case "SET_CART_ITEMS":
            return {
                ...state,
                cartItems:action.payload
            };
        case "SET_PRODUCT":
            return {
                ...state,
                products:action.payload
            };
        case "SET_SEARCH":
        return {
            ...state,
            Keyword:action.payload
        };
        default:
            return state;
    }
}
const StateProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,init);
    return <Provider value={{state,dispatch}}>{children}</Provider>
}

export {
    store,StateProvider
}