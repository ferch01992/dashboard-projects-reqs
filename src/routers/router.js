import React from 'react'

import { ContainerGlobal } from 'Containers/containerGlobal.js'
import { Home } from 'View/home/home.js'
import { Login } from 'View/auth/login.js'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContainerGlobal>
            <Login />
          </ContainerGlobal>
        }
      />
      <Route
        path="/home"
        element={
          <ContainerGlobal>
            <Home />
          </ContainerGlobal>
        }
      />
      <Route
        index
        path="*"
        element={
          <ContainerGlobal>
            <Login />
          </ContainerGlobal>
        }
      />
    </Routes>
  )
}
export { Router }
