import React from 'react'
import {FaBirthdayCake} from 'react-icons/fa'
import {AiTwotoneFlag} from 'react-icons/ai'
import {BsFillGearFill} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineMail} from 'react-icons/ai'
import Daniel from './daniel.jpg'
import Contet from './Contet'
import Achive from './Achive'
import {FaBriefcase} from 'react-icons/fa'
import {FaThumbsUp} from 'react-icons/fa'
import {AiOutlineHeart} from  "react-icons/ai"
import '../About/Styl.css'

const About = () => {

const AchiveData = [
    {
        id: 1,
        icon : <FaBriefcase/>,
        nums : 13,
        texts : "Years Experience"
    },
    {
        id: 2,
        icon: <FaThumbsUp/>,
        nums: 56,
        texts: "Done Projects"
    },
    {
        id : 3,
        icon: <AiOutlineHeart/>,
        nums : 89,
        texts : "Happy Customers"
    }
]




  return (
    <div className=' conta bg-zinc-900 w-full h-auto flex justify-around items-center  flex-col'>
        <div className='about w-full h-[180px]  flex justify-center items-center m-28'>
            <h1 className='text-8xl text-white font-serif font-extrabold'>About <span className='text-orange-500'>Me</span></h1>
        </div>
        <div className='info bg-green-500 w-[90%] h-[700px] flex justify-around items-center'>
            <div className='bg-pink-500 w-[450px] h-[600px]'>
                <img src={Daniel} alt='fine guy' className=' rounded-lg' />
            </div>
            <div className=' other bg-purple-700 w-[765px] h-[510px] flex justify-center items-center flex-col'>
                <p className=' para bg-yellow-600 text-white font-mono text-xl my-5'>I'm Daniel Ben, Nigerian based web designer and front‑end developer living in Lagos focused on crafting clean, creative and user‑friendly experiences, I build beautiful and powerful websites and android applications.</p>
                <div className=' w-full h-[220px] flex justify-between items-center'>
                    <div className=' w-[350px] h-full flex flex-col justify-around'>
                        <span className='text-white flex  items-center text-2xl font-mono'><FaBirthdayCake/>&nbsp;BirtDate: August 1999</span>
                        <span className='text-white flex  items-center text-2xl font-mono'><AiTwotoneFlag/>&nbsp;Nationality: Nigeria</span>
                        <span className='text-white flex  items-center text-2xl font-mono'><BsFillGearFill/>&nbsp;Experince: 8 years</span>
                    </div>
                    <div className=' w-[350px] h-full flex flex-col justify-around'>
                        <span className='text-white flex  items-center text-2xl font-mono'><BsFillTelephoneFill/>&nbsp;Phone: 08159701004</span>
                        <span className='text-white flex  items-center text-2xl font-mono'><HiOutlineLocationMarker/>&nbsp;Address:Lagos,Nigeria</span>
                        <span className='text-white flex  items-center text-2xl font-mono'><AiOutlineMail/>&nbsp;Email:dhanielknightz46@</span>
                    </div>
                </div>
                <div className='w-full h-[100px]  flex items-center'>
                    <button className='py-5 px-6 bg-orange-500 font-semibold text-2xl text-white font-mono'>DOWNLOAD CV</button>
                </div>
            </div>
        </div>
        <div className='w-full h-[350px]  flex justify-center items-center'>
            <div className=' w-1/2 h-full flex justify-center items-center flex-col'>
                <h1 className='w-full h-[120px]  flex justify-center items-center text-6xl font-serif font-extrabold text-white'>My Resume</h1>
                <div className=' w-full h-[130px] flex justify-center items-center'>
                    <div className='text-orange-500 cursor-pointer text-3xl font-sans'>EXPERIENCE</div>&nbsp;&nbsp;
                    <div className='text-gray-400 text-3xl'>|</div>&nbsp;&nbsp;
                    <div className='text-gray-300 cursor-pointer text-3xl font-sans'>EDUCATION</div>
                </div>
            </div>
        </div>
        <Contet/>
        <div className='bg-zinc-800 w-full  h-[450px] flex justify-around items-center'>
     {
        AchiveData.map(({icon,nums,texts})=>(
      <Achive icon = {icon} nums={nums} texts={texts}/>
        ))
            
        
     }
        </div>
    </div>
  )
}

export default About