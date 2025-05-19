import React from 'react'
import s from './NavbarDrop.module.css'
import { Link } from 'react-router-dom'
const NavbarDrop = ({ types }) => {
  return (
    <div className={s.linksWrapper}>
      {types.rows.map((el) =>
        <Link className={s.link} key={el.id} to={`/items/${el.id}/${el.name}`}>
          {el.name}
        </Link>
      )}
    </div>
  )
}

export default NavbarDrop