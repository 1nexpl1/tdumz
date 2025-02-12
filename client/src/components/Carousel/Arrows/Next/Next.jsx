import React from 'react'
import s from './Next.module.css'
import { IoIosArrowForward } from "react-icons/io";

const Next = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className={s.wrapper}
     onClick={onClick}
    >
        <IoIosArrowForward />
    </div>
  )
}

export default Next