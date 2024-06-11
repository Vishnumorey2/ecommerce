import React from 'react'
import data_product from '../Assets/data.js'
import Item from '../Item/Item.jsx'
import '../RelatedProducts/Relatedproducts.css'

const RelatedProducts = () => {

    console.log(data_product);
    
  return (
    <div className='relatedproducts'>
    <h1>Related Products</h1>
    <hr />
    <div className="relatedproducts-items">
      {data_product.map((item,i)=>{
        return <Item key={i}  id={item.id} name={item.name} image={item.images} old_price={item.old_price} new_price = {item.new_price} />
      })}
    </div>
    </div>
  )
}

export default RelatedProducts