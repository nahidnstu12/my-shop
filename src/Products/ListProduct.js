import React,{useContext} from 'react';
import {Card, CardImg, CardBody,CardTitle, Button} from 'reactstrap';
import ThemeContext from '../ThemeContex';
import {Link} from 'react-router-dom';

const Product = ({id,title,image_url,brand,price,addCartItem}) =>{
	const {dark} = useContext(ThemeContext)
    return(
        
        <Card className={`product ${dark ? "text-white bg-dark":""}` }>
        <Link to={`/product/${id}`}>
            <CardImg top width="180px" src={image_url} alt={title} />
            <CardBody>
            <CardTitle className="title">
                <span>{title}</span>
                <span style={{ marginLeft:"15px"}}>*{brand}*</span>
            </CardTitle>
            </CardBody>
        </Link>
        <CardBody>
            <div className="actions">
            <span>Price: ${price}</span>
            <Button onClick={() => addCartItem(id)}>Add Cart</Button>
            </div>           
            </CardBody>
        </Card>
    
    )
}

export default Product;