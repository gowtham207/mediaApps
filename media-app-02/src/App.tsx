import React from 'react'
import { BrowserRouter } from 'react-router'
import MainRoute from './routes'

const App = () => {
  return (
    <BrowserRouter>
    <MainRoute />
    </BrowserRouter>
  )
}

export default App