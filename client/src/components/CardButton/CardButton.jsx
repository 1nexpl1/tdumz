import React, { useState } from 'react'
import s from './CardButton.module.css'
import { RxCross1 } from "react-icons/rx";

const CardButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className={s.allWrapper}>
            <button className={s.orderButton} onClick={() => setIsOpen(!isOpen)}>
                Оставить заявку на ремонт
            </button>
            {isOpen ? (
                <div className={s.wrapper}>
                    <div className={s.wrapperInside}>
                        <div className={s.title}>РЕМОНТ ОБОРУДОВАНИЯ</div>
                        <div className={s.inputs}>
                            <input className={s.input} type="text" name="" id="" placeholder='Эл. почта'/>
                            <button className={s.sendButton} onClick={() => setIsOpen(false)}>Отправить</button>
                        </div>
                        <button className={s.closeButton} onClick={() => setIsOpen(false)}><RxCross1 /></button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default CardButton