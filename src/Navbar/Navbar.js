import React,{useContext} from 'react';
import {useDispatch} from 'react-redux';
import ThemeContext from '../ThemeContex';
import {Link} from 'react-router-dom';
import {setKeyword} from '../redux/actionCreators';

function NavbarTop() {
    const dispatch = useDispatch();
	
	const handleChange = (e) => {
		dispatch(setKeyword(e.target.value.toLowerCase()));
	}
	const {dark,toggleMode} = useContext(ThemeContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="/">MyShop</a>

            <input className="form-control mr-sm-2" type="search" placeholder="Type title or brand name" aria-label="Search" style={{ width:"50%"}} onChange={handleChange}/>

            <input type="checkbox" onClick={toggleMode} />
            <span className="mx-0 text-light">
            {dark ? "dark":"lite"}
            </span>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            

  <div className="collapse navbar-collapse" id="navbarSupportedContent">  
    <ul className="navbar-nav ml-auto "> 
    <li className="nav-item">   
      <Link to="/" className="nav-link">Home</Link>
    </li>
    <li className="nav-item">   
    <Link to="/category" className="nav-link">Category</Link>
    </li>
    <li className="nav-item">   
    <Link to="/checkout" className="nav-link">Checkout</Link>
    </li> 
	  
	  
    </ul>    
  </div>
</nav>
    )
}

export default NavbarTop
