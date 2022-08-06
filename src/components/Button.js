import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  display: block;
  background-color: #f024af;
  width: 90%;
  margin: 1rem auto;
  font-size: 1.25rem;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 0.75rem;
  cursor: pointer;
`

function Button({text, onClick}) {
  return (
    <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>
  )
}

export default Button