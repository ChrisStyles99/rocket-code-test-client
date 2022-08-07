import React from 'react'
import styled from 'styled-components';

import { useMessages } from '../hooks/useMessages';
import Button from './Button';
import Message from './Message';

const ChatContainer = styled.div`
  height: calc(100vh - 100px);
  max-width: 500px;
  overflow-y: auto;
`

function Chat() {

  const { messages, handleInputChange, nextForm, start, isError } = useMessages();

  return (
    <ChatContainer>
      {messages.map((message, index) => (
        <Message key={index} handleInputChange={handleInputChange} onClick={nextForm}>
          {message}
        </Message>
      ))}
      {messages.length === 7 && <Button onClick={start} text="Iniciar" isSave={true} />}
      {messages.length === 7 && <Button onClick={() => window.location.reload()} text="Reiniciar formulario" isSave={false} />}
      {isError && <Button onClick={() => window.location.reload()} text="Reiniciar el formulario" isSave={false} />}
    </ChatContainer>
  )
}

export default Chat