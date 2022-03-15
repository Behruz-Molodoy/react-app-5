import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../App'
import { privateRoutes, publicRoutes } from '../routes'

export default function AppRoutes() {
  const {user , setUser} = useContext(Context)
  if(localStorage.getItem('auth')){
    setUser(true)
  }
  return (
    <Routes>
      {user
        ? privateRoutes.map(route => (
          <Route path={route.path} element={<route.element />} key={route.path} />
        ))
        : publicRoutes.map(route => (
          <Route path={route.path} element={<route.element />} key={route.path} />
        ))
      }
    </Routes>
  )
}
