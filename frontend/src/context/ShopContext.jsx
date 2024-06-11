import React,{createContext} from 'react'
import all_product from '../components/Assets/All_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    
    const contextval = {all_product}
    
    return(
        <ShopContext.Provider value={contextval}>
        {props.children}
       </ShopContext.Provider>
    )
    
}

export default ShopContextProvider