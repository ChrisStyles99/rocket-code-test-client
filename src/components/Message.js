import React, {cloneElement} from 'react'

function Message({children, handleInputChange, onClick}) {
  return (
    <>
      {cloneElement(children, {
        handleInputChange, onClick
      })}
    </>
  )
}

export default Message