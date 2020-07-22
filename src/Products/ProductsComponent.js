import React,{useContext} from 'react';
import ThemeContext from '../ThemeContex';
import {
    Card, CardImg, CardBody,CardTitle, Button
  } from 'reactstrap';

const Product = ({id,title,image_url,brand,price,cartItem}) =>{
	const {dark} = useContext(ThemeContext)
    return(
        <div>
        <Card className={`product ${dark ? "text-white bg-dark":""}` }>
            <CardImg top width="100%" src={image_url} alt={title} />
            <CardBody>
            <CardTitle className="title">
                <span>{title}</span>
                <span>*{brand}*</span>
            </CardTitle>
            <div className="actions">
            <span>Price: ${price}</span>
            <Button onClick={() => cartItem(id)}>Add to Cart</Button>
            </div>           
            </CardBody>
        </Card>
    </div>
    )
}

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