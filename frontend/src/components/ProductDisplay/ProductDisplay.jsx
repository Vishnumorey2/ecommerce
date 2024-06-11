import React, { useEffect } from 'react'
import star_icon from '../Assets/star-icon.png'
import  '../ProductDisplay/ProductDisplay.css'

const ProductDisplay = (props) => {
    
const {product} = props;

console.log(product);

  return (
   <div className="product-display">
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
    </div>
    <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
        <img src={ star_icon} alt="" />
        <img src={ star_icon} alt="" />
        <img src={ star_icon} alt="" />
        <img src={ star_icon} alt="" />
        <img src={ star_icon} alt="" />
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-oldprice">${product.old_price}</div>
            <div className="productdisplay-right-newprice">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        Casual shirt to wear out alert! Check out our new all-cotton flannel shirt! This shirt is made from 100% cotton, making it soft to the touch and gentle on the skin. 
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>Add to Cart</button>
        <p className="productdisplay-right-category">
            <span>Category:</span> Women ,T-shirt croptop
        </p>
        <p className="productdisplay-right-category">
            <span>Tags:</span> Modern ,Latest
        </p>
    </div>
   </div>
  )
}

export default ProductDisplay