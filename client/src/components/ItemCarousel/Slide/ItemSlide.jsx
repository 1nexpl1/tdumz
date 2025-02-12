import React from 'react'
import s from './ItemSlide.module.css'
const ItemSlide = (props) => {
    return (
        <div className={s.mainWrapper}>
            <div className={s.wrapper}>
                <h1 className={s.title}>
                    {props.info.title}
                </h1>
                <div className={s.subTitle}>
                {props.info.text}
                </div>
                <div className={s.button}>
                    {props.info.buttonText}
                </div>
            </div>
        </div>
    )
}

export default ItemSlide