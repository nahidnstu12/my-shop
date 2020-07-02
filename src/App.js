import React, {useState,useEffect} from 'react';
import './App.css';
import Navbar from './Navbar/NavbarComponent';
import ProductList from './Products/ProductsComponent';
import Cart from './Carts/CartsComponent';
import {Data} from './DATA';


function App() {
  const [products,setproducts] = useState([...Data]);
  const [Keyword,setKeyword] = useState("");

  useEffect(()=>{
    const result = Data.filter(product => product.title.toLowerCase().includes(Keyword)|| product.brand.toLowerCase().includes(Keyword));
    setproducts(result);
  },[Keyword]);
  return (
    <div className="App">
      <Navbar setKeyword={setKeyword}/>
      <div className="row">
        <div className="col-md-8"><ProductList products={products}/></div>
        <div className="col-md-4"> <Cart /></div>
      </div>
      
    </div>
  );
}

export default App;
