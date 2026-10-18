import React from 'react'
import avatar from "/images/kakashi_no_bg.png"
// import avatar from "images/kakashi_no_bg.png "

const ProfileAvatar = () => {
  return (
    <div className='h-10 w-10 border-yellow-300 border-[0.2px] bg-neutral-800 overflow-hidden rounded-full object-cover text-center flex items-center justify-center'>
        <img src={avatar} className='' alt="" />
    </div>
  )
}

export default ProfileAvatar
