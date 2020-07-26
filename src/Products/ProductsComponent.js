import React,{useContext,useEffect} from 'react';
import ThemeContext from '../ThemeContex';
import Product from './ListProduct';
import useCarts from '../Carts/useCarts';
import { Data } from '../DATA';
import {store} from '../store';


const ProductList = () => {
  const {dark} = useContext(ThemeContext);
  const {state:{products,Keyword},dispatch} = useContext(store);
  const {addCartItem} = useCarts();
//   console.log("test"+ typeof products);
    useEffect(() => {
		const result = Data.filter(product => product.title.toLowerCase().includes(Keyword) || product.brand.toLowerCase().includes(Keyword));
        dispatch({
            type:"SET_PRODUCT",
            payload:result
        });
	}, [dispatch,Keyword]);
    

    return (
      <div className={`product-list ${dark ? "dark":""}`}>
       
            {products.map(product => <Product {...product} key={product.id} addCartItem={addCartItem}/>)}
        
      </div>
    )
  }

export default ProductList;