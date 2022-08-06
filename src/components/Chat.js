import React, { useState } from 'react'
import styled from 'styled-components';

import { useForm } from '../hooks/useForm';
import Button from './Button';
import ChatConfirmation from './ChatConfirmation';
import ChatFormBirthday from './ChatFormBirthday';
import ChatFormContact from './ChatFormContact';
import ChatFormName from './ChatFormName'
import ChatResponse from './ChatResponse';
import Message from './Message';

const ChatContainer = styled.div`
  height: calc(100vh - 100px);
  max-width: 500px;
  overflow-y: auto;
`

function Chat() {

  const [messages, setMessages] = useState([<ChatFormName />]);
  const { formData, handleInputChange } = useForm({firstName: '', middleName: '', fatherLastName: '', motherLastName: '', 
        day: '', month: '', year: '', email: '', phone: ''});

  const nextForm = () => {
    console.log(formData);
    if(messages.length === 1) {
      setMessages([...messages, 
      <ChatResponse message={`${formData.firstName} ${formData.middleName} ${formData.fatherLastName} ${formData.motherLastName}`} />,
      <ChatFormBirthday />
    ])
    } else if(messages.length === 3) {
      setMessages([...messages,
      <ChatResponse message={`${formData.day} ${formData.month} ${formData.year}`} />,
      <ChatFormContact />])
    } else if(messages.length === 5) {
      setMessages([...messages,
        <ChatResponse message={`Correo electronico ${formData.email} \nTelefono celular: ${formData.phone}`} />,
        <ChatConfirmation />
      ])
    }
  }

  const start = () => {
    if(messages.length >= 8 || messages.length <= 6) return;
    setMessages([...messages,
      <ChatResponse message={`
      Fecha de nacimiento: ${formData.day} ${formData.month} ${formData.year}\n
      Correo electronico: ${formData.email}\n
      Telefono celular: ${formData.phone}\n
      Nombre: ${formData.firstName} ${formData.middleName} ${formData.fatherLastName} ${formData.motherLastName}
    `} />])
  }

  return (
    <ChatContainer>
      {messages.map((message, index) => (
        <Message key={index} setMessages={setMessages} handleInputChange={handleInputChange} onClick={nextForm}>
          {message}
        </Message>
      ))}
      {messages.length === 7 && <Button onClick={start} text="Iniciar" />}
    </ChatContainer>
  )
}

export default Chat