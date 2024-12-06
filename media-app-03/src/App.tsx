import React from 'react'
import MainRoutes from './routes'
import { BrowserRouter } from 'react-router'

const App = () => {
  return (
   <BrowserRouter>
   <MainRoutes />
   </BrowserRouter>
  )
}

export default App