import React from 'react'
import s from './Footer.module.css'

import logo from '../../images/bluelogo.png'
const Footer = () => {
    return (
        <div className={s.wrapper}>
                <div className={s.leftWrapper}>
                    <div className={s.number}>+7 (922) 209-83-08</div>
                    <div className={s.leftSubTitle}>общий</div>
                    <div className={s.mail}>info@tdumz.com </div>
                </div>
                <div className={s.midWrapper}>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className={s.subTitle}>г. Екатеринбург, ул. Антона Валека, 15, офис 503</div>
                </div>
                <div className={s.rightWrapper}>
                    <div className={s.number}>+7 (922) 209-83-80</div>
                    <div className={s.rightSubTitle}>отдел продаж</div>
                    <div className={s.mail}>sale@tdumz.com</div>
                </div>
        </div>
    )
}

export default Footer