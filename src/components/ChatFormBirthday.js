import React from 'react'
import ChatForm from './ChatForm'
import Input from './Input'

function ChatFormBirthday({handleInputChange, onClick}) {
  return (
    <ChatForm title="¿Cual es tu fecha de nacimiento?">
      <Input name="day" type="number" placeholder="Día" onChange={handleInputChange} />
      <Input name="month" type="number" placeholder="Mes" onChange={handleInputChange} />
      <Input name="year" type="number" placeholder="Año" onChange={handleInputChange} />
      <button onClick={onClick}>Siguiente</button>
    </ChatForm>
  )
}

export default ChatFormBirthday