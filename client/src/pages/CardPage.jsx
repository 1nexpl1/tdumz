import React from 'react'
import Footer from '../components/Footer/Footer'
import CardGallery from '../components/CardGallery/CardGallery'
import CardDescription from '../components/CardDescription/CardDescription'
import CardButton from '../components/CardButton/CardButton'

const CardPage = () => {
  return (
    <div>
      <div className='cardWrapper'>
        <CardGallery />
        <CardDescription />
      </div>
      <CardButton />
      <Footer />
    </div>
  )
}

export default CardPage