import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  background-color: #de3cce;
  padding: 1rem;
  height: 100px;
`

const NavbarTitle = styled.h1`
  color: black;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const NavbarSubtitle = styled.h2`
  color: black;
  font-size: 1rem;
`

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTitle>Formulario de información</NavbarTitle>
      <NavbarSubtitle>En menos de 5 minutos</NavbarSubtitle>
    </NavbarContainer>
  )
}

export default Navbar