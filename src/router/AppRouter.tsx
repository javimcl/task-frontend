import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/*' element={<LoginScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}
