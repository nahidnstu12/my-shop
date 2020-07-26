import React from 'react';
import Product from './ListProduct';
import {useParams} from 'react-router-dom';
import { Data } from '../DATA';
import useCarts from '../Carts/useCarts';

const ProductDetails = () =>{

    const {productId} = useParams();
    const product = Data.find(p => p.id=== parseInt(productId));
    const {addCartItem} = useCarts();
    console.log(product);
    return(
        <div className="product-details">
            <h3>Product Code- {productId}</h3>
            
            <Product {...product} addCartItem={addCartItem} key={productId}/>
            
        </div>
    )
}

export default ProductDetails;