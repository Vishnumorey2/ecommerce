import React from 'react'
import '../Offers/Offers.css'
import image from '../Assets/image-4.jpg'

const Offers = () => {
  return (
    <div className="offer">
        <div className="offer-left">
            <h1>EXCLUSIVE</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS ON PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Offers