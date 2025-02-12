import React from 'react'
import vid from '../../videos/file.mp4'
import logo from '../../images/tdlogo.png'
import s from './MainVideoBG.module.css'
const MainVideoBG = () => {
  return (
    <div className={s.wrapper}>
        <video width="100%" autoPlay={true} muted loop>
            <source src={vid} type="video/mp4"/>
        </video>
        <img className={s.logo} src={logo} alt="" />
        <div className={s.text}>ТД «УМЗ» - это современное и высокотехнологичное оборудование для добывающей промышленности  по оптимальным ценам: продажа, обслуживание и ремонт </div>
    </div>
  )
}

export default MainVideoBG