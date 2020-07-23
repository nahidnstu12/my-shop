import React, { useState, useEffect } from 'react';
import ProductList from '../Products/ProductsComponent';
import Cart from '../Carts/CartsComponent';
import useCarts from '../Carts/useCarts';
import { Data } from '../DATA';

const Home = ({Keyword}) =>{

    const [products, setproducts] = useState([...Data]);
    const {cartItem,addCartItem,removeCartItem,clearCart} = useCarts([],products);

    useEffect(() => {
		const result = Data.filter(product => product.title.toLowerCase().includes(Keyword) || product.brand.toLowerCase().includes(Keyword));
		setproducts(result);
	}, [Keyword]);
    
	return(	
    <div className="row">
    	<div className="col-md-8">
    		<ProductList products={products} addCartItem={addCartItem} />
    	</div>
    	<div className="col-md-4">
    		<Cart cartItem={cartItem} removeCartItem={removeCartItem} clearCart={clearCart}/> 
    	</div>
    </div>

    )
}

export default Home;