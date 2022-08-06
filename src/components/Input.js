import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.input`
  background-color: transparent;
  padding: 0.5rem;
  margin: 0.25rem 0;
  border: 1px solid #aaa;
`

function Input(props) {
  return (
    <InputContainer {...props} />
  )
}

export default Input