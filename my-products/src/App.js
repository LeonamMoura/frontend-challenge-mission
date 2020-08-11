import React from 'react'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  )
}