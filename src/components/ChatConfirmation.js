import React from 'react'
import styled from 'styled-components'

const ChatConfirmationContainer = styled.div`
  background-color: #ddd;
  max-width: 75%;
  border-radius: 0.75rem;
  padding: 1rem;
  margin: 0.5rem 0;
`

function ChatConfirmation() {
  return (
    <ChatConfirmationContainer>
      Si tus datos son correctos por favor continuemos
    </ChatConfirmationContainer>
  )
}

export default ChatConfirmation