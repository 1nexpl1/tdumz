import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInPage from '../../pages/SignInPage'
import DashboardPage from '../../pages/DashboardPage'
import Items from '../items/Items'
import Client from '../client/client'

const AppRouter = () => {
  return (
    <Routes> 
        <Route path = 'signin' element={<SignInPage />}/>
        <Route path = 'item' element={<Items />} />        
        <Route path = 'client' element={<Client />} />
        <Route path = '*' element={<DashboardPage />}/>
    </Routes>
  )
}

export default AppRouter