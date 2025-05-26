import React from 'react'
import { MyCarosuel } from './Components/MyCarosuel';
import ProductCarousel from './Components/ProductCarousel';
import OnSaleComponent from './Components/onSaleComponent';

const Home = () => {
  return (
    <>
    <MyCarosuel/>
    <ProductCarousel/>
    <OnSaleComponent/>
    </>
  )
}

export default Home;