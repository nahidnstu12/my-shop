import React, { useState, lazy,Suspense } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/NavbarComponent';
import ThemeContext from './ThemeContex';
import {StateProvider} from './redux/Store';

const App = () => {
	const [dark,setDark] = useState(false);
	
	const toggleChange = () => {
		setDark(isDark => !isDark)
	}

	const Home = lazy(()=>import('./Home/Home'));
	const ProductDetails = lazy(()=> import('./Products/ProductDetails'));
	const Checkout = lazy(()=>import('./Carts/Checkout'));
	const Cart = lazy(()=>import('./Carts/CartsComponent'));

	return (
		<StateProvider>
		<ThemeContext.Provider value={{ dark:dark,toggleMode:toggleChange}}>
		<div className={`App ${dark ? "dark":""}`}>
		<Router>
			<Navbar />
			<Suspense fallback={<div className="text-center">Loading...</div>}>
			<Switch>
				<Route path="/checkout" component={Checkout } />            
				<Route path="/product/:productId" component={ProductDetails }/> 
				<Route path="/home" component={Home} />
				<Redirect to='/home'/>          
            </Switch>
			<Cart /> 
			</Suspense>
		</Router>
		</div>
		</ThemeContext.Provider>
		</StateProvider>
	);
}

export default App;
