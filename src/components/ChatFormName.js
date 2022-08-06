import React from 'react'
import ChatForm from './ChatForm'
import Input from './Input'

function ChatFormName({handleInputChange, onClick}) {
  return (
    <ChatForm title="¿Cual es tu nombre?">
      <Input name="firstName" type="text" placeholder="Nombre" onChange={handleInputChange} />
      <Input name="middleName" type="text" placeholder="Segundo nombre" onChange={handleInputChange} />
      <Input name="fatherLastName" type="text" placeholder="Apellido paterno" onChange={handleInputChange} />
      <Input name="motherLastName" type="text" placeholder="Apellido materno" onChange={handleInputChange} />
      <button onClick={onClick}>Siguiente</button>
    </ChatForm>
  )
}

export default ChatFormName