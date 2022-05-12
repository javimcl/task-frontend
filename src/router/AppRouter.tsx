import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/*' element={<LoginScreen/>}/>
        <Route path='/Register' element={<RegisterScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}
