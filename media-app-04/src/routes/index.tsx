import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import InfoScreen from '../screens/InfoScreen'
import AboutPage from '../screens/AboutScreen'
import ContactPage from '../screens/ContactScreen'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/' element={<HomeScreen />} />
        <Route path='/info' element={<InfoScreen />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />


    </Routes>
  )
}

export default MainRoutes