import React from 'react'
import ScrollerImages from '../ScrollerImages'
import RestuarentScroll from '../RestuarentScroll'
import FoodSection from '../FoodSection'
function Home() {
  return (
    <div className='home'>
      <ScrollerImages/>
      <RestuarentScroll/>
      <FoodSection/>
    </div>
  )
}

export default Home