import React from 'react'
import Navbar from './Components/Navbar'
import BannerWithSidebar from './Components/BannerWithSidebar'

import CategoryBrowser from './Components/CategoryBrowser'
import Products from './Components/Products'
import Banner from './Components/Banner'
import NewArival from './Components/NewArival'
import Temsolien from './Components/Temsolien'
import OurProducts from './Components/OurProducts'
import TopProducts from './Components/TopProducts'

const App = () => {
  return (
    <div>
      <Navbar/>
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

export default App
