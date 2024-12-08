import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import InfoScreen from '../screens/InfoScreen'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/' element={<HomeScreen />} />
        <Route path='/info' element={<InfoScreen />} />

    </Routes>
  )
}

export default MainRoutes