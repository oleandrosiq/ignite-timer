// External Libraries
import React from 'react'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

// Assets
import { LogoIgniteSVG } from '../../assets/LogoIgniteSVG'

// Styles
import { HeaderContainer } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoIgniteSVG />

      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='Histórico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>  
  )
}