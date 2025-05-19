import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCarousel from '../components/ItemCarousel/ItemCarousel'
import Footer from '../components/Footer/Footer'
import Items from '../components/Items/Items'
import { fetchItems } from '../http/itemAPI'

const ItemPage = () => {
  const { id, type } = useParams()
  const [corItems, setCorItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetchItems()
      .then(data => {
        if (Array.isArray(data.rows)) {
          const filtered = data.rows.filter(item => item.chapterId == id)
          setCorItems(filtered)
        } else {
          setCorItems([])
        }
      })
      .catch(err => {
        setError('Ошибка загрузки товаров')
        console.error(err)
      })
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div>
      <ItemCarousel />
      <div className="ItemTitle">{type}</div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Загрузка товаров...</div>
      ) : error ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</div>
      ) : corItems.length > 0 ? (
        <Items key={id} corItems={corItems} />
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Нет товаров в этой категории</div>
      )}

      <Footer />
    </div>
  )
}

export default ItemPage
