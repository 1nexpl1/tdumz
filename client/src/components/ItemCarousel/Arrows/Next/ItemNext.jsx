import React from 'react'
import s from './ItemNext.module.css'
import { IoIosArrowForward } from 'react-icons/io';

const ItemNext = (props) => {
    const { onClick } = props;
    return (
      <div
      className={s.wrapper}
       onClick={onClick}
      >
          <IoIosArrowForward />
      </div>
    )
}

export default ItemNext