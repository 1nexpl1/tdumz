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
    fetchOneItem(item.id).then(data => {
      setName(data.title)
      setImage('http://localhost:8000/' + data.images[0].path)
      setLink(data.id)
      
    }
    ).then(data => setLoad(false))
    
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