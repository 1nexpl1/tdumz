import React from 'react'
import Item from '../Item/Item'

import s from './Items.module.css'

const Items = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.insideWrapper}>
            <Item />
        </div>
    </div>
  )
}

export default Items