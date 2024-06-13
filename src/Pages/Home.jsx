import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Product from '../Components/Products'
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';



const Home = ({cart}) => {
  return (
    <>
        <Navbar cart={cart}/>
        
        <Banner/>
        <Product/>
        <Footer/>
    </>
  )
}

export default Home