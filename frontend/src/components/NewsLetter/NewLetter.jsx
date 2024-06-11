import React from 'react'
import '../NewsLetter/NewLetter.css'

const NewLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscribe to newlettter and stay updated</p>
        <div>
        <input type="email" placeholder='your email' />
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter