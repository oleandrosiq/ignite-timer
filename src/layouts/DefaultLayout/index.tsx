// External Libraries
import React from 'react'
import { Outlet } from 'react-router-dom'

// Components
import { Header } from "../../components/Header"

// Styles
import { LayoutContainer } from './styles'

export const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}