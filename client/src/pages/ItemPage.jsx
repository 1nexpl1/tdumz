import React from 'react'
import ItemCarousel from '../components/ItemCarousel/ItemCarousel'
import Footer from '../components/Footer/Footer'
import Items from '../components/Items/Items'

const ItemPage = () => {
  return (
    <div>
      <ItemCarousel />
      <div className='ItemTitle'>Заголовок</div>
      <Items />
      <Footer />
    </div>
  )
}

export default ItemPage