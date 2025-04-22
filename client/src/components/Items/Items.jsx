import React from 'react'
import Item from '../Item/Item'

import s from './Items.module.css'

const Items = ({ corItems }) => {
  return (
    <div className={s.wrapper}>
          {corItems.map(el=>
            <Item item = {el}/>
          )}
    </div>
  )
}

export default Items