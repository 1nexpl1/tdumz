import React, { useEffect, useState } from 'react'
import ItemCarousel from '../components/ItemCarousel/ItemCarousel'
import Footer from '../components/Footer/Footer'
import Items from '../components/Items/Items'

const ItemPage = ({ items, id, type }) => {
  const [corItems, setCorItems] = useState([])

  useEffect(() => {
    if (items && Array.isArray(items.rows)) {
      const filteredItems = items.rows.filter(item => item.chapterId == id)
      setCorItems(filteredItems)
    }
  }, [items, id]) // реагируем на обновление данных и ID

  return (
    <div>
      <ItemCarousel />
      <div className='ItemTitle'>{type}</div>
      {corItems.length > 0 ? (
        <Items key = {id} corItems={corItems} />
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Загрузка товаров...</div>
      )}
      <Footer />
    </div>
  )
}

export default ItemPage
