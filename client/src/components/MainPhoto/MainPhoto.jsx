import React from 'react'
import photo from '../../images/mainphoto.png'
import s from './MainPhoto.module.css'
const MainPhoto = () => {
  return (
    <div className={s.wrapper}>
        <img src={photo} alt="" />    
    </div>
  )
}

export default MainPhoto