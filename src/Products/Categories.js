import React,{useState} from 'react';
import { Badge, Button } from 'reactstrap';
import {Data} from '../DATA';
import useCarts from '../Carts/useCarts';
import Product from './ListProduct';

const Category = () =>{

    // fetch all brand name
    const brandNameArray = Data.map(product => product.brand);
    
    // collect brandName with products quantity 
    // [a,b,a,c] => {a:2,b:1,c:1}
    const brandGroup = brandNameArray.reduce((groups, name) => {                
        if(name in groups){
            groups[name]++;
        }else{
            groups[name] = 1;
        }
        return groups;

    }, {});
    
    // convert object to arrays 
    // {a:2,b:1,c:1} => [[a,2],[b,1],[c,1]]
    const result = Object.entries( brandGroup);  
    
    // find those object which contains similar brandName
    const listItem = brandName => Data.filter(item => item.brand === brandName)

    return(
        <div className="category">
        <h3>Category</h3>
            <div className="row container" style={{ borderBottom:".1px dotted #f0e15f",marginBottom:"50px"}}>
            
            {result.map((item,ind)=> <CategoryBtn key={ind}  brandName={item[0]} quantity={item[1]} handlelist={listItem(item[0])}/> )}
             <hr />
            </div>
        </div>
       
    )
}
const CategoryBtn = ({brandName,quantity,handlelist}) => {
    const [show,setShow] = useState(false);
    const {addCartItem} = useCarts();
    const toggleCategory =()=>{setShow( state => !state)};

    return(
        <>
        <div className="col-sm-4 col-md-3 m-2">
            <Button color="info" outline style={{fontWeight:"600"}} onClick={()=>toggleCategory()} show={show ? 1 : 0} handlelist={handlelist}>
                {brandName} <Badge color="success">{quantity}</Badge>
            </Button>

        </div>
        <div className="row">
            {show && handlelist.map((item,ind) =>(
                <Product key={ind} {...item} addCartItem={addCartItem} className="col-4"/>
                ))
            }
            </div> 

      </>
    )
}

export default Category;
