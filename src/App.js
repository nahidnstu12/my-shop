import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/NavbarComponent';
import ThemeContext from './ThemeContex';
import Home from './Home/Home';
import Checkout from './Carts/Checkout'
import ProductDetails from './Products/ProductDetails';


const App = () => {
	const [Keyword, setKeyword] = useState("");
	const [dark,setDark] = useState(false);
	
	const toggleChange = () => {
		setDark(isDark => !isDark)
	}

	return (
		<ThemeContext.Provider value={{ dark:dark,toggleMode:toggleChange}}>
		<div className={`App ${dark ? "dark":""}`}>
		<Router>
			<Navbar setKeyword={setKeyword} />
			<Switch>
				<Route path="/checkout" component={Checkout } />            
				<Route path="/product/:productId" component={ProductDetails }/> 
				<Route path="/" component={()=> <Home Keyword={Keyword}/>} />          
            </Switch>
		</Router>
		</div>
		</ThemeContext.Provider>
	);
}

export default App;
