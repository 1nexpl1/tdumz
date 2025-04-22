import React from 'react'
import s from './CardDescription.module.css'
import CardAccordeon from '../CardAccordeon/CardAccordeon'
const CardDescription = ({data}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{data.title}</div>
      <CardAccordeon description = {data.description}/>
    </div>
  )
}

export default CardDescription