import React,{useContext,useEffect} from 'react';
import ThemeContext from '../ThemeContex';
import {useSelector,useDispatch} from 'react-redux';
import Product from './ListProduct';
import useCarts from '../Carts/useCarts';
import {setProducts} from '../redux/actionCreators';
import { Data } from '../DATA';

const ProductList = ({_products}) => {
  const {dark} = useContext(ThemeContext);
  const {products,Keyword} = useSelector(state => state);
  const dispatch = useDispatch();
  const {addCartItem} = useCarts();

//   console.log(products.length)
  useEffect(() => {
    const result = Data.filter(product => product.title.toLowerCase().includes(Keyword) || product.brand.toLowerCase().includes(Keyword));
    if(Keyword.length === 0 ){
      dispatch(setProducts(_products))
    }else{
      dispatch(setProducts(result))
    }
	}, [dispatch,Keyword,_products]);

    return (
    
      <div className={`product-list ${dark ? "dark":""}`}>
       
            {products.map(product => <Product {...product} key={product.id} addCartItem={addCartItem}/>)}
        
      </div>
      
    )
  }

export default ProductList;