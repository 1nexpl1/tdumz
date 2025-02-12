import React from 'react'
import MainVideoBG from '../components/MainVideoBG/MainVideoBG'
import MainInfo from '../components/MainInfo/MainInfo'
import MainPhoto from '../components/MainPhoto/MainPhoto'

const MainPage = () => {
  return (
    <div className='MainWrapper'>
      <MainVideoBG/>
      <MainInfo />
      <MainPhoto />
    </div>
  )
}

export default MainPage