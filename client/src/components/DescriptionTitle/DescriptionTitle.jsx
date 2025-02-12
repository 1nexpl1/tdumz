import React from 'react'
import s from './DescriptionTitle.module.css'

const DescriptionTitle = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.text}>{props.content}</div>
        </div>
    )
}

export default DescriptionTitle