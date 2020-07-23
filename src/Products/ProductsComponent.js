import React,{useContext} from 'react';
import ThemeContext from '../ThemeContex';
import Product from './ListProduct';

const ProductList = ({products,addCartItem}) => {
	const {dark} = useContext(ThemeContext)

    return (
      <div>
        <h3 className="text-center text-danger">All Products-{products.length}</h3>        
        <div className={`product-list ${dark ? "dark":""}`}>
            {products.map(product => <Product {...product} key={product.id} cartItem={addCartItem}/>)}
        </div>
      </div>
    )
  }

export default ProductList;