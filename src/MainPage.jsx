import React from 'react'
import Footer from './components/Footer'
import HeroPage from './components/HeroPage'
import Navbar from './components/Navbar'
import Topic from './components/Topic'
import TrendingPage from './components/TrendingPage'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage>

      </HeroPage>
      <TrendingPage/>
      <Topic/>
      <Footer/>
    </div>
  )
}

export default MainPage
