import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Badge, Button } from 'reactstrap';
import {Data} from '../DATA';
import Product from './ListProduct';
import useCarts from '../Carts/useCarts';

const Category = () =>{
    const {products} = useSelector(state => state);
    const {addCartItem} = useCarts();
   
    const brandNameArray = Data.map(product => product.brand);
    
    const brandGroup = brandNameArray.reduce((groups, name) => {        
        //[Savory Sock,Amazing Aisles,Odd Provisions,Cermak Produce,Mega Market,One Stop Grocery,Festival Foods,The Corner Grocery,Aaa Grocery,Abc Grocery,Exotic Grocery,The Family Table] - 12       
        if(name in groups){
            groups[name]++;
        }else{
            groups[name] = 1;
        }
        return groups;

    }, {});

   
    const result = Object.entries( brandGroup);
    const listItem = Data.filter(item => item.brand === "Amazing Aisles")
    
    // const dispatch = useDispatch();
    return(
        <div className="category">
        <h3>Category</h3>
            <div className="row " style={{ borderBottom:".1px dotted #f0e15f",marginBottom:"50px"}}>
            
            {result.map((item,ind)=> <CategoryBtn key={ind}  brandName={item[0]} quantity={item[1]} />)}<hr />
            </div>
            <h3 >---Products---</h3>
            
            <div className="row">
            {listItem.map((item,ind) =>(
            
                    <Product key={ind} {...item} addCartItem={addCartItem} className="col-4"/>
                ))
            }
            </div>
        </div>
       
    )
}
const CategoryBtn = ({brandName,quantity}) => {
    const [show,setShow] = useState(false);
    
    const toggleCategory =()=>{setShow( state => !state)};
    return(
        
        <div className="col-sm-2 col-6 m-2">
            <Button color="info" outline style={{fontWeight:"600"}} onClick={()=>toggleCategory()}>
                {brandName} <Badge color="success">{quantity}</Badge>
            </Button>
        </div>
        
    )
}

export default Category;
