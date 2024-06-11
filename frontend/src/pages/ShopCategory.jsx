import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item/Item';
import dropdown_icon from '../components/Assets/dropdown-icon.png';
import '../CSS/shopcategory.css'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
   <div className="shop-category">
    <div className="shopcategory-indexsort">
      <p>
        <span>showing 1-12</span> out of 16 product
      </p>
      <div className="shopcategory-sort">
        sort by <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div className="shopcategory-products">
      {all_product.map((item,i) => {
        if(props.category===item.category){
          return <Item key={i}  Id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>
        }else{
          return null;
        }
      })}
    </div>
    <div className="shopcategory-loadmore">
      EXPLORE MORE
    </div>
   </div>
  )
}

export default ShopCategory