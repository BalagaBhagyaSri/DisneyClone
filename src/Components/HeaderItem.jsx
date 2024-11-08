import React from 'react'

const HeaderItem = ({ name, icon: Icon }) => {
  return (
   <>
   <div className="header-item text-white flex gap-3 text-[15px] font-semibold items-center 
   cursor-pointer  mb-2 hover:underline underline-offset-8">
      <Icon className="icon" />
      <h2 className=''>{name}</h2>
    </div>
   </>
  )
}

export default HeaderItem