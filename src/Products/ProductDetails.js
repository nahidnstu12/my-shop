import React from 'react';
import Product from './ListProduct';
import {useParams} from 'react-router-dom';
import useCarts from '../Carts/useCarts';
import {useSelector} from 'react-redux';

const ProductDetails = () =>{
    const {productId} = useParams();
    const {products} = useSelector(state => state);
    const product = products.find(p => p.id=== (productId));
    const {addCartItem} = useCarts();
    const {description} = product
    return(
        <div className="product-details">
            <h3>Product Code- {productId}</h3>
            
            <Product {...product} addCartItem={addCartItem} key={productId}/>
            <div>{description}</div>
            
        </div>
    )
}

export default ProductDetails;