import React from 'react'
import s from './ConsultAbout.module.css'

const ConsultAbout = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.insideWrapper}>
                <div className={s.title}>КОНСУЛЬТАЦИЯ ПО ПРИОБРЕТЕНИЮ И ПРОИЗВОДСТВУ ОБОРУДОВАНИЯ И ДЕТАЛЕЙ</div>
                <div className={s.subTitle}>подробная информация по всем видам предлагаемой нами продукции, а именно, дизельных двигателей отечественного и импортного производства, бурового оборудования и запасных частей предоставляется по запросу.</div>
                <div className={s.phoneWrapper}>
                    <div className={s.phone}>+7 (922) 209-83-08</div>
                    <div className={s.phone}>+7 (922) 209-83-80</div>
                </div>
                <div className={s.subTitle}>отдел продаж ТД "УМЗ"</div>
                <div className={s.email}>sale@tdumz.com</div>
            </div>
        </div>
    )
}

export default ConsultAbout