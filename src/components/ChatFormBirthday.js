import React from 'react'
import ChatForm from './ChatForm'
import Input from './Input'

function ChatFormBirthday({handleInputChange, onClick}) {
  return (
    <ChatForm title="¿Cual es tu fecha de nacimiento?">
      <Input name="day" type="number" placeholder="Día (requerido)" onChange={handleInputChange} />
      <Input name="month" type="number" placeholder="Mes (requerido)" onChange={handleInputChange} />
      <Input name="year" type="number" placeholder="Año (requerido)" onChange={handleInputChange} />
      <button onClick={onClick}>Siguiente</button>
    </ChatForm>
  )
}

export default ChatFormBirthday