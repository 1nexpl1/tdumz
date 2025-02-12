import React from 'react'
import logo from '../../images/logochb.png'
import s from './AboutPoints.module.css'

const AboutPoints = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.logo} src={logo} />
            <div className={s.title}>ТД "УМЗ" - поставка оборудования для добывающей промышленности</div>
            <div className={s.wrapperBlocks}>
                <div className={s.blockWrapper}>
                    <div className={s.number}>
                        01
                    </div>
                    <div className={s.text}>
                        ГОРНО-ШАХТНОЕ ОБОРУДОВАНИЕ
                    </div>
                </div>
                <div className={s.blockWrapper}>
                    <div className={s.number}>
                        02
                    </div>
                    <div className={s.text}>
                        ДВИГАТЕЛИ ВНУТРЕННЕГО СГОРАНИЯ
                    </div>
                </div>
                <div className={s.blockWrapper}>
                    <div className={s.number}>
                        03
                    </div>
                    <div className={s.text}>
                        РЕМОНТ ОБОРУДОВАНИЯ
                    </div>
                </div>
                <div className={s.blockWrapper}>
                    <div className={s.number}>
                        04
                    </div>
                    <div className={s.text}>
                        МЕТАЛЛИЧЕСКИЕ КОНСТРУКЦИИ
                    </div>
                </div>
                <div className={s.blockWrapper}>
                    <div className={s.number}>
                        05
                    </div>
                    <div className={s.text}>
                        БУРОВОЕ ОБОРУДОВАНИЕ
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPoints