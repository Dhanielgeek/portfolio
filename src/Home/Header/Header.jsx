import React, { useState } from 'react'
 import {AiOutlineMenu} from 'react-icons/ai'
 import {MdClear} from 'react-icons/md'
 import {AiFillHome} from 'react-icons/ai'
 import {CiViewList} from 'react-icons/ci'
 import {FaBriefcase} from 'react-icons/fa'
 import {MdOutlineMailOutline} from 'react-icons/md'
 import {RiFolderHistoryLine} from 'react-icons/ri'
 


const Header = () => {

  const [Toggle, setToggle] = useState(true)

const Dropdown = ()=>{

  setToggle(!Toggle)
}



  return (
    <div className='w-[100%] bg-zinc-900 h-[90px] flex justify-end items-center fixed'>
       <div className='w-1/2 h-full bg-zinc-900 flex justify-end items-center mx-8'>
         {
          Toggle ? (<div onClick={Dropdown}>
            <AiOutlineMenu className='text-white text-2xl cursor-pointer m-28'/>
          </div>) : (<div onClick={Dropdown}>
            <MdClear className='text-white text-2xl cursor-pointer m-28'/>
            <div className=' w-[260px] h-[290px] bg-zinc-800  flex justify-around items-center flex-col my-16'>
            <span className='font-bold text-2xl text-orange-600 w-full flex justify-center items-center cursor-pointer hover:text-orange-400'>
              <AiFillHome/>&nbsp;&nbsp;&nbsp;&nbsp;HOME</span>
            <span className='font-bold text-2xl text-white flex justify-center items-center cursor-pointer hover:text-orange-500'>
             <CiViewList/>&nbsp;&nbsp;&nbsp;&nbsp;ABOUT</span>
            <span className='font-bold text-2xl text-white flex  items-center cursor-pointer hover:text-orange-500'>
            &nbsp;<FaBriefcase/>&nbsp;PORTFOLIO</span>
            <span className='font-bold text-2xl text-white flex justify-center items-center cursor-pointer hover:text-orange-500'>
              <MdOutlineMailOutline/>&nbsp;&nbsp;&nbsp;&nbsp;CONTACT</span>
            <span className='font-bold text-2xl text-white flex justify-center items-center cursor-pointer hover:text-orange-500'>
              <RiFolderHistoryLine/>&nbsp;&nbsp;&nbsp;&nbsp;BLOG</span>
        </div>
          </div>)
         }
        </div>
      
    </div>
  )
}

export default Header