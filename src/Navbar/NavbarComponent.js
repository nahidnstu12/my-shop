import React from 'react';

const Navbar = ({ setKeyword }) => {
	const handleChange = (e) => {
		// alert(setKeyword(e.target.value));
		setKeyword(e.target.value.toLowerCase());
	}
	return (
		<div className="nav-bar">
			<h3 className="d-inline">My Shop</h3>
			<input name="search" className="search-box ml-3 px-4" placeholder="Type title or brand name" onChange={handleChange} />
		</div>
	)
}

export default Navbar;