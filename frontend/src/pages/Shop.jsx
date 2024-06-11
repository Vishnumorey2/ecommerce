import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Collection from '../components/Collection/Collection.jsx'
import NewLetter from '../components/NewsLetter/NewLetter.jsx'
import Footer from '../components/Footer/Footer.jsx'


const Shop = () => {
  return (
    <div className='container'>
    <Hero />
    <Popular/>
    <Offers/>
    <Collection/>
    <NewLetter/>
    <Footer/>
    </div>
  )
}

export default Shop