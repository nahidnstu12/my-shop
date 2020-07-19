import React,{useState} from 'react';

const Cart = ({ cartItem, removeCartItem,clearCart }) => {

	const [chekoutOpen,setcheckoutOpen] =  useState(false);
	const [address,setAddress] = useState("");

	const totalPrice = cartItem.reduce((acc, cur) =>
		acc + cur.price * cur.quantity, 0
	)
	const toggleCKout = () => {
		setcheckoutOpen(status =>!status)
	}
	const handleChange = (e) =>{
		setAddress(e.target.value)
	}
	return (
		 <div className="cart-list">
			<h4>Cart Items</h4>

			{cartItem.length === 0 &&
			<div className="cart-item">
				<div className="info">
					<h2>Cart is empty</h2>
				</div>
			</div>}
			
			<div className="cart-items">

			{cartItem.length >0 && 
				cartItem.map((item) => 
				(<ProductOnCart {...item} key={item.id} removeCartItem={removeCartItem} />))
			}

			{cartItem.length > 0 && 
			<>
				<div className="cart-item mt-4">
					<div className="info ">
						<span className="badge badge-warning p-3" style={{ fontSize: "120%", width: "30%", }}>Total</span>
						<span className="badge badge-pill badge-secondary p-3" style={{ fontSize: "100%", width: "25%" }}>$ {totalPrice}</span>
					</div>
				</div>
				
				<div className="cart-item">
					<div className="info ">
						<button className="btn btn-outline-danger" onClick={clearCart}>Clear All</button>
						<button className="btn btn-outline-primary" onClick={toggleCKout} >{chekoutOpen ? "Hide": "Check Out"}</button>
					</div>
				</div>
			</>
			}
			
			</div>

			{chekoutOpen && cartItem.length > 0 &&
			<div className="cart-item" style={{width:"100%"}}>
				<div className="info row" >
					<input placeholder="Enter your address" onChange={handleChange} className="form-control col-7 ml-2"/>
					<button className="btn btn-outline-primary col-3 mr-3" onClick={clearCart} disabled={!address}>Check Out</button>
				</div>
			</div>}

		</div> 
	)
}

const ProductOnCart = ({ id, title, price, quantity, removeCartItem }) => {
	return (
		<div className="cart-item">
			<button className="btn btn-sm btn-outline-danger" onClick={() => removeCartItem(id)}>X</button>
			<div className="info">
				<span>{title} x {quantity}</span>
				<span>{price * quantity}</span>
			</div>
		</div>
	)
}

export default Cart;