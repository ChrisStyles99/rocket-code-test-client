import React, {cloneElement} from 'react'

function Message({children, setMessages, handleInputChange, onClick}) {
  return (
    <>
      {cloneElement(children, {
        setMessages, handleInputChange, onClick
      })}
    </>
  )
}

export default Message