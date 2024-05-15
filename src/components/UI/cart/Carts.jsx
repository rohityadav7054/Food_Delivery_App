import React from 'react';

import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';
import '../../../styles/shopping-cart.css'
import { useDispatch } from 'react-redux';
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Carts=()=>{
const dispatch=useDispatch();
const cartProducts=useSelector((State)=>State.cart.CartItems)
const totalAmount=useSelector((state)=>state.cart.totalAmount)

const toggleCart=()=>{
   dispatch(cartUiActions.toggle())
};


return (
<div className="cart_container">
    <ListGroup className='cart'>
         <div className='cart_close'>
            <span onClick={toggleCart}><i className="ri-close-line"></i></span>
        </div>

        <div className="cart_item-list">
           {cartProducts.lenght===0 ?(
				 <h6 className='text-center mt-5'>No item added to the cart</h6>
				  ):(
					cartProducts.map((item,index)=>(
                <CartItem item={item} key={index}/>
            ))
           )}
          </div>

        <div className="cart_bottom d-flex align-items-center justify-content-between">
           <h6>
				Subtotal : <span>{totalAmount}</span>
			  </h6>
           <button>
				<Link to="/checkout" onClick={toggleCart}>Checkout</Link>
				</button>
        </div>
    </ListGroup>
</div>
);
};
export default Carts;