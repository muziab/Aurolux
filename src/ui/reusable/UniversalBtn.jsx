import React from 'react'
import "../../Components/Card.css"
const UniversalBtn = ({actionDesc}) => {
  return (
    <>
      <button className='actionBtn'>{actionDesc}</button>
    </>
  )
}

export default UniversalBtn
