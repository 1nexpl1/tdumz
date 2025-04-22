import React, { useEffect, useState } from 'react'
import ItemCarousel from '../components/ItemCarousel/ItemCarousel'
import Footer from '../components/Footer/Footer'
import Items from '../components/Items/Items'

const ItemPage = ({items, id, type}) => {
  const [corItems, setCorItems] = useState()
  const currentUrl = window.location.href;

  useEffect(()=>{
    let corI = items.rows.filter((item)=> item.chapterId == id)
    setCorItems(corI)
  },[currentUrl])
  
  return (
    <div>
      <ItemCarousel />
      <div className='ItemTitle'>{type}</div>
      {corItems ? (
      <Items corItems={corItems}/>
      
      ):(
        <></>
      )
      }
      <Footer />
    </div>
  )
}

export default ItemPage