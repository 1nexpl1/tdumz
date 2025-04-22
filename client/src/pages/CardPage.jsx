import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import CardGallery from '../components/CardGallery/CardGallery'
import CardDescription from '../components/CardDescription/CardDescription'
import CardButton from '../components/CardButton/CardButton'
import { fetchOneItem } from '../http/itemAPI'

const CardPage = ({id}) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchOneItem(id).then(data => setData(data)).then(data => setLoading(false))
  }, [])
  


  return (
    <>
    {loading ? (
      <></>
    ):(
      <div>
      <div className='cardWrapper'>
        <CardGallery imag = {data.images}/>
        <CardDescription data={data}/>
      </div>
      <CardButton />
      <Footer />
    </div>
    )}

    </>
  )
}

export default CardPage