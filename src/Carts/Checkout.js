import React,{useState} from 'react';
import useCarts from './useCarts';

const Checkout = () =>{
    const {totalPrice,clearCart} = useCarts();
    const [address,setAddress] = useState("");

    const handleChange = (e) =>{
		setAddress(e.target.value)
    }
    
	const clearState = () => {
		clearCart();
		setAddress(""); 
		//setcheckoutOpen(false);
	}
    return(
        
        <div className="checkout">
            <h3>Check out-{totalPrice}</h3>
            {totalPrice > 0 ? (
            <div className="cart-item" style={{width:"100%"}}>
				<div className="info row" >
					<input placeholder="Enter your address" onChange={handleChange} className="form-control col-5 ml-5"/>
					<button className="btn btn-outline-primary col-3 mr-5" onClick={clearState} disabled={!address}>Check Out</button>
				</div>
			</div>): (<h5>Cart is empty</h5>)}
        </div>
    )
}

export default Checkout;