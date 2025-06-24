import React from 'react'
import BannerWithSidebar from './BannerWithSidebar'
import TopProducts from './TopProducts'
import CategoryBrowser from './CategoryBrowser'
import Products from './Products'
import Banner from './Banner'
import OurProducts from './OurProducts'
import NewArival from './NewArival'
import Temsolien from './Temsolien'

const Home = () => {
  return (
    <div>
      <BannerWithSidebar/>
      <TopProducts/>
      <CategoryBrowser/>
      <Products/>
      <Banner/>
      <OurProducts/>
      <NewArival/>
      <Temsolien/>
      
      
    </div>
  )
}

export default Home