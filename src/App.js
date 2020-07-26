import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/NavbarComponent';
import ThemeContext from './ThemeContex';
import Home from './Home/Home';
import Checkout from './Carts/Checkout'
import ProductDetails from './Products/ProductDetails';
import {StateProvider} from './store';
import Cart from './Carts/CartsComponent';

const App = () => {
	const [dark,setDark] = useState(false);
	
	const toggleChange = () => {
		setDark(isDark => !isDark)
	}

	return (
		<StateProvider>
		<ThemeContext.Provider value={{ dark:dark,toggleMode:toggleChange}}>
		<div className={`App ${dark ? "dark":""}`}>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/checkout" component={Checkout } />            
				<Route path="/product/:productId" component={ProductDetails }/> 
				<Route path="/home" component={Home} />
				<Redirect to='/home'/>          
            </Switch>
			<Cart /> 
		</Router>
		</div>
		</ThemeContext.Provider>
		</StateProvider>
	);
}

export default App;
