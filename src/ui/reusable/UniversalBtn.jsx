import React from 'react'
import "../../Components/Card.css"
const UniversalBtn = ({actionDesc}) => {
  return (
    <>
      <button className='max-sm:p-1  actionBtn'>{actionDesc}</button>
    </>
  )
}

export default UniversalBtn
