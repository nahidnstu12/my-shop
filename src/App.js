import React, { useState, useEffect,useContext } from 'react';
import './App.css';
import Navbar from './Navbar/NavbarComponent';
import ProductList from './Products/ProductsComponent';
import Cart from './Carts/CartsComponent';
import useCarts from './Carts/useCarts';
import { Data } from './DATA';
import ThemeContext from './ThemeContex';


const App = () => {
	const [products, setproducts] = useState([...Data]);
	const [Keyword, setKeyword] = useState("");
	const [dark,setDark] = useState(false);
	const {cartItem,addCartItem,removeCartItem,clearCart} = useCarts([],products);

	const toggleChange = () => {
		setDark(isDark => !isDark)
	}

	useEffect(() => {
		const result = Data.filter(product => product.title.toLowerCase().includes(Keyword) || product.brand.toLowerCase().includes(Keyword));
		setproducts(result);
	}, [Keyword]);

	
	return (
		<ThemeContext.Provider value={{ dark:dark,toggleMode:toggleChange}}>
		<div className={`App ${dark ? "dark":""}`}>
			<Navbar setKeyword={setKeyword} />
			<div className="row">
				<div className="col-md-8">
					<ProductList products={products} addCartItem={addCartItem} />
				</div>
				<div className="col-md-4">
					<Cart cartItem={cartItem} removeCartItem={removeCartItem} clearCart={clearCart}/> 
				</div>
			</div>
		</div>
		</ThemeContext.Provider>
	);
}

export default App;
