import {useContext} from 'react';
import {store} from '../store';

// Custom hooks
const useCarts = () => {
	
	const {state:{cartItems,products},dispatch} = useContext(store);
	const setCartItem = (items) =>{
		dispatch({type:"SET_CART_ITEMS",payload:items})
	}
	const addCartItem = (id) => {
		const item = products.find(product => product.id === id);
		
			const itemIndex = cartItems.findIndex(currentItem => currentItem.id=== id);
			// new item added
			if(itemIndex === -1){
				setCartItem( [...cartItems,
				{...item,
				quantity:1
				}])

			}
			// existed item update
			else{
				setCartItem( cartItems.map(currentItem => currentItem.id === id
					? {...item,
						quantity:parseInt(currentItem.quantity)+1} 
					:currentItem
					)
				)}
		
	}

	const removeCartItem = id => {
		
			const item = cartItems.find(product => product.id === id);
			
			if( item.quantity===1){
				// console.log("quantity = 1")
				setCartItem( cartItems.filter(item => item.id !== id))
			}
			 
			else {
				// console.log("quantity > 1 " + item.quantity)
				setCartItem( cartItems.map(currentItem => 
					currentItem.id === id 
					? {...item,quantity:parseInt(currentItem.quantity)-1} 
					: currentItem));
			}
	
	}

	const clearCart = () => {
		const res = window.confirm("Are you sure to perform this?");
		if(res){
			setCartItem([]);
		}
	}

	const totalPrice = cartItems.reduce((acc, cur) =>
		acc + cur.price * cur.quantity, 0
	)


	return {
		totalPrice,
		cartItems,
		addCartItem,
		removeCartItem,
		clearCart
	}

}
export default useCarts;