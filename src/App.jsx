import React from 'react'
import Navbar from './Components/Navbar'
import BannerWithSidebar from './Components/BannerWithSidebar'
import FlashSales from './Components/flashSales'
import CategoryBrowser from './Components/CategoryBrowser'
import Products from './Components/Products'
import Banner from './Components/Banner'
import NewArival from './Components/NewArival'
import Temsolien from './Components/Temsolien'

const App = () => {
  return (
    <div>
      <Navbar/>
     <BannerWithSidebar/>
     <FlashSales/>
     <CategoryBrowser/>
     <Products/>
     <Banner/>
     <NewArival/>
     <Temsolien/>
    </div>
  )
}

export default App
