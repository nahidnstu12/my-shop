import React,{useContext} from 'react';
import {Card, CardImg, CardBody,CardTitle, Button} from 'reactstrap';
import ThemeContext from '../ThemeContex';
import {Link} from 'react-router-dom';

const Product = ({id,title,image_url,brand,price,addCartItem}) =>{
	const {dark} = useContext(ThemeContext)
    return(
        <div>
        <Card className={`product ${dark ? "text-white bg-dark":""}` }>
        <Link to={`/product/${id}`}>
            <CardImg top width="100%" src={image_url} alt={title} />
            <CardBody>
            <CardTitle className="title">
                <span>{title}</span>
                <span>*{brand}*</span>
            </CardTitle>
            </CardBody>
        </Link>
        <CardBody>
            <div className="actions">
            <span>Price: ${price}</span>
            <Button onClick={() => addCartItem(id)}>Add to Cart</Button>
            </div>           
            </CardBody>
        </Card>
    </div>
    )
}

export default Product;