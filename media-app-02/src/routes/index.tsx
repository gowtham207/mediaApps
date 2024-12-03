import React from 'react'
import {  Route, Routes } from 'react-router'
import LoginScreen from '../Screens/LoginScreen'
import HomePage from '../Screens/HomePage'
import ContactScreen from '../Screens/ContactScreen'
import PlanScreen from '../Screens/PlanScreen'
import InfoScreen from '../Screens/InfoScreen'

const MainRoute = () => {
  return (
   <Routes>
    <Route path='/login' element={<LoginScreen />} />
    <Route path='/' element={<HomePage />} />
    <Route path='/contact' element={<ContactScreen />} />
    <Route path='/plan' element={<PlanScreen />} />
    <Route path='/info' element={<InfoScreen />} />


   </Routes>
  )
}

export default MainRoute