import React from 'react'
import  '../../components/Navbar/Navbar.css'
import logo from '../Assets/shopping-logo.png'
import cart from '../Assets/cart-logo.jpg'
import { useState } from 'react'
import  {Link} from 'react-router-dom'

const Navbar = () => {
   
    const [menu,setmenu] = useState('shop')

  return (
    <>
   <div className='nav-bar'>

    <div className='nav-logo'>
     <img src={logo} alt="" />
    </div>
   
   <ul className="nav-menu">
    <li onClick={()=> {setmenu("shop")}}> <Link style={{textDecoration: 'none'}} to="/"> shop </Link>         {menu === "shop"?<hr/>:<></>} </li>
    <li onClick={()=> {setmenu("men")}}>   <Link style={{textDecoration: 'none'}}   to="/men"> men </Link>         {menu === "men"?<hr/>:<></>}</li>
    <li onClick={()=> {setmenu("women")}}> <Link    style={{textDecoration: 'none'}} to="/women"> women </Link>   {menu === "women"?<hr/>:<></>}</li>
    <li onClick={()=> {setmenu("kids")}}>  <Link  style={{textDecoration: 'none'}} to="/kids"> kids </Link>      {menu === "kids"?<hr/>:<></>}</li>
   </ul>

   <div className="nav-login">
    <Link to="/login"><button>Login</button></Link>
    <Link to="/cart"><img src={cart} alt="" /></Link>
    <div className="cart-count">
        0
    </div>
   </div>
   
   </div>
   </>
  )
}

export default Navbar