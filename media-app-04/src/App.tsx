import React from 'react'
import { BrowserRouter } from 'react-router'
import MainRoutes from './routes'

const App = () => {
  return (
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
  )
}

export default App