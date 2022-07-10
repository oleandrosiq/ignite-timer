// External Libraries
import React from 'react'
import { Outlet } from 'react-router-dom'

// Components
import { Header } from "../components/Header"

export const DefaultLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}