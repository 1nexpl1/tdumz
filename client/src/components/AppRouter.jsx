import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import ItemPage from '../pages/ItemPage'
import CardPage from '../pages/CardPage'

const AppRouter = () => {
  return (
    <Routes> 
        <Route path = '*' element={<MainPage />}/>
        <Route path = 'main' element={<MainPage />}/>
        <Route path = 'about' element={<AboutPage />}/>
        <Route path = 'ex' element={<ItemPage />}/>
        <Route path= 'examp' element={<CardPage />}/>
    </Routes>
  )
}

export default AppRouter