import React from 'react'
import ChatForm from './ChatForm'
import Input from './Input'

function ChatFormContact({handleInputChange, onClick}) {
  return (
    <ChatForm title="Datos de contacto">
      <Input name="email" type="email" placeholder="Correo electronico" onChange={handleInputChange} />
      <Input name="phone" type="tel" placeholder="Telefono celular" onChange={handleInputChange} />
      <button onClick={onClick}>Siguiente</button>
    </ChatForm>
  )
}

export default ChatFormContact