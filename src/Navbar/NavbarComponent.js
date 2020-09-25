import React,{useContext} from 'react';
import {useDispatch} from 'react-redux';
import ThemeContext from '../ThemeContex';
import {Link} from 'react-router-dom';
import {setKeyword} from '../redux/actionCreators';

const Navbar = () => {
	const dispatch = useDispatch();
	
	const handleChange = (e) => {

		dispatch(setKeyword(e.target.value.toLowerCase()));
	}
	const {dark,toggleMode} = useContext(ThemeContext);
	return (
		<>
		
		<div className="nav-bar row ">
			<div className="col-11 ">
			<div className="row">
			<div className="col-md-6 col-sm-5 d-flex  justify-content-center">
				<h3 className="d-inline">My Shop </h3>
				<input name="search" className="search-box ml-3 px-4" placeholder="Type title or brand name" onChange={handleChange} />
			</div>
			
			<div className="links col-md-6 col-sm-5 d-flex justify-content-center">
				<Link to="/">Home</Link>
				<Link to="/category">Category</Link>
				<Link to="/checkout">Checkout</Link>
			</div>
			</div>
			</div>
			<div className="d-inline-flex justify-content-end col">
			<input type="checkbox" onClick={toggleMode} className=" "/>{dark ? "dark":"lite"}
			</div>
		</div>
		</>
	)
}

export default Navbar;