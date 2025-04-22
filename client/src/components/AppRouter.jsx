import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import ItemPage from '../pages/ItemPage'
import CardPage from '../pages/CardPage'
import { fetchTypes } from '../http/itemAPI'

const AppRouter = ({ types, items }) => {

  return (
    <Routes>
      <Route path='*' element={<MainPage />} />
      <Route path='main' element={<MainPage />} />
      <Route path='about' element={<AboutPage />} />
      {types.rows.map(el =>
        <Route path={`items-${el.id}`} element={<ItemPage type = {el.name} items={items} id = {el.id}/>} />
      )}
      {items.rows.map(el =>
        <Route path={`item-${el.id}`} element={<CardPage id = {el.id}/>} />
      )}
    </Routes>
  )
}

export default AppRouter