import React from 'react'
import s from './Slide.module.css'

const Slide = (props) => {
    return (
        <>
            {parseInt(props.info.number) % 2 == 1 ? (
                <>
                    <div className={s.leftToRight}>
                        <h1 className={s.number}>
                            {props.info.number}
                        </h1>
                        <div>
                            <div className={s.title}>{props.info.title}</div>
                            <div className={s.textLeft}>{props.info.text}</div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={s.rightToLeft}>
                        <h1 className={s.number}>
                            {props.info.number}
                        </h1>
                        <div>
                            <div className={s.title}>{props.info.title}</div>
                            <div className={s.textRight}>{props.info.text}</div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Slide