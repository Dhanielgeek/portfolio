import React from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import './SStyle.css' 

const Herosec = () => {
  return (
    <div className=' holder w-[100%] bg-zinc-900 h-[900px]  flex  justify-center items-center flex-col'>
        <div className='Name_cont flex justify-center items-center bg-zinc-900 flex-col'>
            <h1 className='text-white text-8xl font-serif  md:flex-col'>Hi! I'm <span className='text-orange-600'>Daniel.</span></h1>
            <p className='text-white font-mono text-3xl'>I'm a Freelance UI/UX Designer and Developer based in Lagos, Nigeria. </p>
            <button className='py-4 px-5 bg-orange-500 text-white font-bold text-xl font-serif my-16 cursor-pointer'>MORE ABOUT ME</button>
        </div>
        <div className=' lasty bg-zinc-900 flex justify-between items-center w-full '>
            <div className=' m-9'>
             <div className='font-mono text-xl text-white'>Let's work together</div>
             <div className='font-mono text-orange-500 text-lg cursor-pointer'>dhanielknightz@gmail.com</div>
             <div className='font-mono text-xl text-white'>08159701004</div>
            </div>
              <div className='ico w-[200px]  flex justify-around h-[30px] items-center m-6'>
                <GrFacebookOption className='text-white text-xl cursor-pointer translate-x-2 hover:text-orange-400'/>
                <BsTwitter className='text-white text-xl cursor-pointer translate-x-2 hover:text-orange-400'/>
                <FaLinkedin className='text-white text-xl cursor-pointer translate-x-2 hover:text-orange-400'/>
                <FiDribbble className='text-white text-xl cursor-pointer translate-x-2 hover:text-orange-400'/>
                <BsInstagram className='text-white text-xl cursor-pointer translate-x-2 hover:text-orange-400'/>
            </div>
        </div>
    </div>
  )
}

export default Herosec