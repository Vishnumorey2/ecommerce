import React,{createContext} from 'react'
import all_product from '../components/Assets/All_product'
import { useState } from 'react';
export const ShopContext = createContext(null);

let getDefaultCart = () => {
    let cart = {}
    for(let i = 0;i<all_product.length;i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

  const [cartItems,setCartItems] = useState(getDefaultCart()); 
    
  let addToCart = (Itemid) =>{
    setCartItems((prev) => ({...prev,[Itemid]:prev[Itemid]+1}))
    console.log(cartItems);
  }

  let removeToCart = (Itemid) =>{
    setCartItems((prev) => ({...prev,[Itemid]:prev[Itemid]-1}))
  }
    

  let getTotalCartAmount = () => {
    let totalamount = 0;
    for(let item in cartItems){
        if(cartItems[item] > 0){
            let iteminfo = all_product.find((product) => product.id === Number(item));
            totalamount += iteminfo.new_price * cartItems[item];
        }
       return totalamount;
    }
    console.log("totalamount",totalamount);
  }

    const contextval = {getTotalCartAmount,all_product,cartItems,addToCart,removeToCart}
    
    return(
        <ShopContext.Provider value={contextval}>
        {props.children}
       </ShopContext.Provider>
    )
    
}

export default ShopContextProvider