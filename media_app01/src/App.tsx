import React from 'react'
import AppRoutes from './routes'
import { BrowserRouter } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  )
}

export default App