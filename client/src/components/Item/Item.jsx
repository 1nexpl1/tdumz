import React, { useEffect, useState } from 'react'
import s from './Item.module.css'
import photo from '../../images/ex.png'
import { Link, useNavigate } from 'react-router-dom'
import { use } from 'react'
import { fetchOneItem } from '../../http/itemAPI'
const Item = ({ item }) => {
  const [image, setImage] = useState()
  const [load, setLoad] = useState(true)
  const [name, setName] = useState()
  const [link, setLink] = useState()
  
  const currentUrl = window.location.href;
  useEffect(() => {
    fetchOneItem(item.id)
      .then(data => {
        setName(data.title)
        if (data.images && data.images.length > 0) {
          setImage('https://api.tdumz.com/' + data.images[0].path)
        } else {
          setImage('https://placehold.co/300x300') 
        }
        setLink(data.id)
      })
      .finally(() => setLoad(false))
  }, [currentUrl])
  

  return (
    <>
      {load ? (
        <></>
      ) : (
        <Link to={`/item-${link}`} className={s.wrapper}>
          <img className={s.image} src={image} alt="" />
          <div className={s.title}>{name}</div>
        </Link>
      )}
    </>
  )
}

export default Item