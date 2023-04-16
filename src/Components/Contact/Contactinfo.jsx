import React from 'react'


const Contactinfo = ({icon,texts}) => {
  return (
    <div className=' bg-zinc-800 w-[450px] h-[140px] relative flex justify-around items-center flex-col'>
        <div className='w-[80px] h-[80px] rounded-full bg-orange-500 absolute top-[-60px] left-44 flex justify-center items-center text-white text-3xl'>
            {icon}
        </div>
        <div className=' w-full h-[120px] flex justify-center items-center text-white text-3xl font-serif font-semibold'>
            {texts}
        </div>
    </div>
  )
}

export default Contactinfo