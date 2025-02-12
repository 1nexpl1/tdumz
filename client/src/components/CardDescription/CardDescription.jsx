import React from 'react'
import s from './CardDescription.module.css'
import CardAccordeon from '../CardAccordeon/CardAccordeon'
const CardDescription = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Ремонт оборудования</div>
      <CardAccordeon />
    </div>
  )
}

export default CardDescription