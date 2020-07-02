import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Product = ({id,title,image_url,brand,price}) =>{
    return(
        <div>
        <Card className="product">
            <CardImg top width="100%" src={image_url} alt={title} />
            <CardBody>
            <CardTitle className="title">
                <span>{title}</span>
                <span>*{brand}*</span>
            </CardTitle>
            <div className="actions">
            <span>Price: ${price}</span>
            <Button>Add to Cart</Button>
            </div>           
            </CardBody>
        </Card>
    </div>
    )
}

const ProductList = ({products}) => {
    return (
      <div>
        <h3 className="text-center">All Products-{products.length}</h3>        
        <div className="product-list">
            {products.map(product => <Product {...product} />)}
        
        </div>
        
        
      </div>
    )
  }

export default ProductList;