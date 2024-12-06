import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from '../pages/HomeScreen'
import LoginScreen from '../pages/LoginScreen'
import InfoScreen from '../pages/InfoScreen'
import SupportScreen from '../pages/SupportScreen'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='Login' element={<LoginScreen />} />
        <Route path='/' element={<HomeScreen />} />
        <Route path='/support' element={<SupportScreen />} />
        <Route path='/info' element={<InfoScreen />} />
    </Routes>
  )
}

export default MainRoutes