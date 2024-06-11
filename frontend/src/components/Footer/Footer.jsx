import React from 'react'
import '../Footer/Footer.css'
import logo from '../Assets/footer_logo.jpg'
import insta_logo from '../Assets/insta-logo.png'
import whatsapp_logo from '../Assets/whatsapp_logo.jpg'
import pinterest from '../Assets/pinterest.png'

const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-logo">
      <img src={logo} alt="" />
      <h1>SHOPPER</h1>
    </div>
    <ul>
      <li>Company</li>
      <li>product</li>
      <li>offices</li>
      <li>About</li>
    </ul>
    <div className="footer-social-container">
      <div className="footer-icon-container">
        <img src={insta_logo} alt="" />
      </div>
      <div className="footer-icon-container">
        <img src={whatsapp_logo} alt="" />
      </div>
      <div className="footer-icon-container">
        <img src={pinterest} alt="" />
      </div>
    </div>

    <div className="footer-copyright">
      <hr/>
      <p>copyright @ 2024 - All Rights Reserved</p>
    </div>
   </div>
  )
}

export default Footer