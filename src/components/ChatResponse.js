import React from 'react'
import styled from 'styled-components';

const ChatResponseContainer = styled.div`
  background-color: #de3cce;
  max-width: 75%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  margin-left: auto;
  border-radius: 12px;
  white-space: pre-line;
`

function ChatResponse({message}) {
  return (
    <ChatResponseContainer>
      {message}
    </ChatResponseContainer>
  )
}

export default ChatResponse