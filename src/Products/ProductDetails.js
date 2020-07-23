import React from 'react';
import Product from './ListProduct';
import {useParams} from 'react-router-dom';
import { Data } from '../DATA';

const ProductDetails = () =>{
    const {productId} = useParams();
    const product = Data.find(p => p.id=== parseInt(productId));
    return(
        <div className="text-center">
            <h3>Product Code- {productId}</h3>
            <div style={{ marginLeft:"40%"}}>
            <Product {...product} />
            </div>
        </div>
    )
}

export default ProductDetails;