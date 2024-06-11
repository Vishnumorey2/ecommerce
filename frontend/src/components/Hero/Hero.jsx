import React from 'react'
import hand_icon from '../Assets/hand-icon.png'
import model_image from '../Assets/model-image.jpg'
import './Hero.css'


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <button>Latest Collections</button>
            </div>
        </div>
        <div className="hero-right">
            <img src={model_image} alt="" />
        </div>
    </div>
  )
}

export default Hero