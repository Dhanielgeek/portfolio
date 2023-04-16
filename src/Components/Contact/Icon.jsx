import React from 'react'

const Icon = ({logo}) => {
  return (
    <div className='w-[60px] h-[60px] bg-zinc-800 rounded-full cursor-pointer flex justify-center items-center text-white text-xl hover:bg-orange-500'>
        {logo}
    </div>
  )
}

export default Icon