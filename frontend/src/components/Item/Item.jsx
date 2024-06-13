import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {

  console.log(props.name)
  return (
    <div className="item">
       <Link to = {`/Product/${props.Id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>  
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="old-price">
                ${props.old_price}
            </div>
            <div className="new-price">
                ${props.new_price}
            </div>
        </div>
    </div>
  )
}

export default Item