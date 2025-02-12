import React from 'react'
import s from './Prev.module.css'
import { IoIosArrowBack } from "react-icons/io";

const Prev = (props) => {
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

export default Prev