import React,{useState} from 'react';
import ProductList from '../Products/ProductsComponent';
import Pagination from './Pagination';
import { Data } from '../DATA';

const Home = () =>{
	const [perPage] = useState(20);
	const [currentPage,setCurrentPage] = useState(1);

	const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentProducts = Data.slice(indexOfFirst,indexOfLast);

	const paginate = numb => setCurrentPage(numb);
	
	return(	
		<div className="pag">
		<ProductList  _products = {currentProducts} />
		<Pagination perPage={perPage} totalProducts = {Data.length} paginate={paginate}/>
		</div>	
    )
}

export default Home;