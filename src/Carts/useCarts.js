import {useState} from 'react';

const useCarts = (init,products) => {
	const [cartItem, setCartItem] = useState(init);

	const addCartItem = (id) => {
		const item = products.find(product => product.id === id);
		setCartItem(items => {
			const itemIndex = items.findIndex(currentItem => currentItem.id=== id);
			// new item added
			if(itemIndex === -1){
				return [...items,
				{...item,
				quantity:1
				}]

			}
			// existed item update
			else{
				return items.map(currentItem => currentItem.id === id
					? {...item,
						quantity:parseInt(currentItem.quantity)+1} 
					:currentItem
					)
			}
		})
	}
	const removeCartItem = id => {
		setCartItem(items => {
			const item = cartItem.find(product => product.id === id);
			
			if( item.quantity===1){
				// console.log("quantity = 1")
				return items.filter(item => item.id !== id)
			}
			 
			else {
				// console.log("quantity > 1 " + item.quantity)
				return items.map(currentItem => 
					currentItem.id === id 
					? {...item,quantity:parseInt(currentItem.quantity)-1} 
					: currentItem);
			}
		})
	}
	const clearCart = () => {
		const res = window.confirm("Are you sure to perform this?");
		if(res){
			setCartItem([]);
		}
	}
	return {
		cartItem,
		addCartItem,
		removeCartItem,
		clearCart
	}

}
export default useCarts;