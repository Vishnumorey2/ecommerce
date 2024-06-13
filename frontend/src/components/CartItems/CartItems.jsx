import React, { useContext } from 'react'
import '../CartItems/CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/remove-icon.jpg'


const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeToCart} = useContext(ShopContext);
  return (
   <div className="cartitems">
    <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
    
   {all_product.map((e)=>{
    
    if(cartItems[e.id] > 0){
       return <div>
        <div className="cartitems-format cartitems-format-main">
     <img src={e.image} className='product-icon' alt="" />
     <p>{e.name}</p>
     <p>${e.new_price}</p>
     <button className='cartitems-quantity'>{cartItems[e.id]}</button>
     <p>${e.new_price * cartItems[e.id]}</p>
     <img className='remove-icon' src={remove_icon} onClick={()=>{removeToCart(e.id)}} alt="" />
 </div>
 <hr />
       </div>
          
    }
     return null
   })}
   <div className="cartitems-down">
    <div className='cartitems-total'>
       <h1>Total</h1>
       <div>
        <div className='cartitems-total-items'>
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className='cartitems-total-items'>
            <p>Shipping fee</p>
            <p>Free</p>
        </div>
        <div className='cartitems-total-items'>
            <p>Total</p>
            <p>${getTotalCartAmount()}</p>
        </div>
       </div>
       <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cartitems-promocode">
        <p>if you have promocode,enter here</p>
        <div className="carditems-promobox">
            <input type="text" placeholder='promocode' />
            <button>SUBMIT</button>
        </div>
    </div>
   </div>
   </div>
  )
}

export default CartItems