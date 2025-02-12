import React from 'react'
import s from './Item.module.css'
import photo from '../../images/ex.png'
import { Link, useNavigate } from 'react-router-dom'
const Item = () => {
  return (
    <Link to='/examp' className={s.wrapper}>
        <img className={s.image} src={photo} alt="" />
        <div className={s.title}>Ремонт оборудования</div>
    </Link>
  )
}

export default Item