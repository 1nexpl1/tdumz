import React from 'react'
import s from './CatalogAbout.module.css'

const CatalogAbout = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.insideWrapepr}>
                <div className={s.title}>
                    КАТАЛОГ И КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
                </div>
                <div className={s.subTitle}>коммерческое предложение на буровое оборудование формируется на основании технического задания заказчика</div>
                <div className={s.buttonWrapper}>
                    <button className={s.but}>Запросить коммерческое предложение</button>
                </div>
                <div className={s.subTitle2}>вы можете направить запрос по электронной форме или связаться со специалистом отдела продаж по телефону:</div>
                <div className={s.number}>+7 (922) 209-83-08</div>
                <div className={s.number}>+7 (922) 209-83-80</div>
            </div>
        </div>
    )
}

export default CatalogAbout