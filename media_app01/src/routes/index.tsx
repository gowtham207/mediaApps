import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import InfoScreen from '../screens/InfoScreen'
import AboutScreen from '../screens/AboutScreen'
import PlanScreen from '../screens/PriceScreen'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginScreen/>}/>  
       <Route path='/' element={<HomeScreen/>}/>  
       <Route path='/info' element={<InfoScreen/>}/>  
       <Route path='/about' element={<AboutScreen />} />
       <Route path='/plan' element={<PlanScreen />} />
    </Routes>
  )
}

export default AppRoutes