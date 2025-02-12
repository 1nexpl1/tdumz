import React from 'react'
import up from '../../images/uptriangle.png'
import down from '../../images/downtriangle.png'
import photo from '../../images/mainphoto.png'

import s from './MainInfo.module.css'
const MainInfo = () => {
  return (
    <div className={s.wrapper}>
        <img src={up} alt="" />
        <div className={s.wrapperInfo}>
            <div className={s.text}>ТД «УМЗ» - компания, осуществляющая  поставки оборудования для добывающей промышленности.</div>
        </div>
        <div className={s.cardsWrapper}>    
        <div className={s.card}>
            <div className={s.title}>ПРОИЗВОДСТВО</div>
            <div className={s.subTitle}>собственное производство оборудования и комплектующих</div>
        </div>
        <div className={s.card}>
            <div className={s.title}>ОПЫТ РАБОТЫ</div>
            <div className={s.subTitle}>многолетний опыт работы: поставка оборудования, обслуживание и ремонт на всей территории России</div>
        </div>
        <div className={s.card}>
            <div className={s.title}>СЕРВИС</div>
            <div className={s.subTitle}>капитальный ремонт, модернизация оборудования и техническое обслуживание предлагаемого оборудования</div>
        </div>
        </div>
        <img src={down} alt="" className={s.arrowDown}/>
    </div>
  )
}

export default MainInfo