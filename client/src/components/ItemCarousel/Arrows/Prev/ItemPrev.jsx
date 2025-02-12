import React from 'react'
import s from './ItemPrev.module.css'
import { IoIosArrowBack } from 'react-icons/io';
const ItemPrev = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={s.wrapper}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  )
}

export default ItemPrev