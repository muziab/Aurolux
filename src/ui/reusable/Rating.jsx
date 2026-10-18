import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = () => {
  return (
    <div className={"flex gap-1 items-center"}>
      <FaStar style={{color: "var(--color-gold-rich)"}}/>
      <span style={{fontWeight:"lighter",fontFamily: "var(--font-numbers)"}}>4.9</span>
    </div>
  )
}

export default Rating