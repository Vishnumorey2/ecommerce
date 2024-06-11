import React from 'react'
import arrow_icon from '../Assets/arrow-icon.png'
import '../Breadcrum/Breadcrum.css'

const Breadcrum = (props) => {
   // const {product} = props;
  return (
   <div className="breadcrum">
    HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />  <img src={arrow_icon} alt="" /> 
   </div>
  )
}

export default Breadcrum