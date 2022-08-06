import React from 'react'
import styled from 'styled-components'

const ChatFormWrapper = styled.div`
  display: flex;
`

const ChatFormContainer = styled.div`
  background-color: #ddd;
  max-width: 75%;
  border-radius: 0.75rem;
  padding: 1rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`

const ChatFormTitle = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`

const ChatFormImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  border-radius: 50%;
`

function ChatForm({title, children}) {
  return (
    <ChatFormWrapper>
    <ChatFormImage src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f" alt="Foto de perfil" />
    <ChatFormContainer>
      <ChatFormTitle>{title}</ChatFormTitle>
      {children}
    </ChatFormContainer>
    </ChatFormWrapper>
  )
}

export default ChatForm