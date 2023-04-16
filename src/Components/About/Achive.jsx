import React from 'react'

const Achive = ({icon,nums,texts}) => {
  return (
    <div className=' w-[350px] h-[380px] flex justify-around items-center flex-col'>
        <div className='bg-orange-500 rounded-full w-[100px] h-[100px] flex justify-center items-center text-white text-5xl'>
            {icon}
        </div>
        <div className=' w-full h-32 flex justify-center items-center font-bold text-8xl font-serif text-white'>
            {nums}
        </div>
        <div className=' w-full h-24 flex justify-center items-center font-semibold text-4xl font-mono text-white'>
            {texts}
        </div>
    </div>
  )
}

export default Achive