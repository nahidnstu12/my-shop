import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar/NavbarComponent';
import ProductList from './Products/ProductsComponent';
import Cart from './Carts/CartsComponent';
import { Data } from './DATA';


const App = () => {
	const [products, setproducts] = useState([...Data]);
	const [cartItem, setCartItem] = useState([]);
	const [Keyword, setKeyword] = useState("");

	useEffect(() => {
		const result = Data.filter(product => product.title.toLowerCase().includes(Keyword) || product.brand.toLowerCase().includes(Keyword));
		setproducts(result);
	}, [Keyword]);

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
	return (
		<>
			<Navbar setKeyword={setKeyword} />
			<div className="row">
				<div className="col-md-8">
					<ProductList products={products} addCartItem={addCartItem} />
				</div>
				<div className="col-md-4">
					<Cart cartItem={cartItem} removeCartItem={removeCartItem} clearCart={clearCart}/> 
				</div>
			</div>


		</>
	);
}

export default App;
