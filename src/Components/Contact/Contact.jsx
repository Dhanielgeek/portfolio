import React from 'react'
import Contactinfo from './Contactinfo'
import {BiPhone} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import Icon from './Icon'
import {GrFacebookOption} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const Contact = () => {


const contactInfo = [
    {
        id: 1,
        icon: <BiPhone/>,
        texts : "+2348159701004"
    },
    {
        id : 2,
        icon: <AiOutlineMail/>,
        texts : "dhanielknightz@gmail.com"
    },
    {
        id : 3,
        icon : <CiLocationOn/>,
        texts : "Lagos, Nigeria"
    }

]

const iconData = [
    {
        id : 1,
        logo: <GrFacebookOption/>
    },
    {
        id : 2,
        logo : <BsTwitter/>
    },
    {
        id : 3,
        logo: <FaLinkedin/>
    },
    {
        id : 4,
        logo: <BsInstagram/>
    }
]

  return (
    <div className='bg-zinc-900 w-full h-auto flex justify-center items-center flex-col'>
        <div className=' w-3/4 h-[360px] flex justify-center items-center'>
            <h1 className='text-9xl text-white font-extrabold font-serif'>Get <span className='text-orange-600'>In Touch</span></h1>
        </div>
       <div className='w-[90%] h-[280px] bg-zinc-900 flex justify-around items-center'>
       {
        contactInfo.map(({icon,texts})=>(
            <Contactinfo icon={icon} texts={texts}/>
        ))
       }
       </div>
       <div className='bg-gray-500 w-[300px] h-[1px]'></div>
       <div className='w-full h-[700px] bg-zinc-900 flex justify-around items-center'>
        <div className=' w-[520px] h-[390px] flex justify-evenly flex-col'>
            <h1 className='text-white text-5xl font-serif font-medium '>Send Me An Email</h1>
            <p className='text-white text-2xl font-mono'>Feel free to get in touch with me. I am always open to discussing new projects or creative ideas.</p>
            <h1 className='text-white font-serif text-4xl'>Follow Me</h1>
            <div className=' w-[290px] h-[90px] flex items-center justify-around'>
            {
                iconData.map(({logo})=>(
                    <Icon logo= {logo}/>
                ))
            }
            </div>
        </div>
        <form className=' w-[750px] h-[530px] flex justify-around items-start flex-col'>
           <div className='w-full h-[180px]  flex justify-between items-center'>
           <input type='text' placeholder='YOUR NAME' className='w-[240px] h-[60px]  bg-zinc-800 font-mono text-3xl text-center text-white'/>
            <input type='text' placeholder='SUBJECT'className='w-[240px] h-[60px]  bg-zinc-800 font-mono text-3xl text-center text-white'/>
            <input type='text' placeholder='YOUR EMAIL' className='w-[240px] h-[60px]  bg-zinc-800 font-mono text-3xl text-center text-white'/>
           </div>
           <textarea typeof='text' className='w-full h-[290px] bg-zinc-800 py-4 px-7 text-3xl font-mono text-white' placeholder='YOUR MESSAGE'/>
           <button className='py-3 px-8 bg-orange-600 text-2xl font-mono text-white'>SEND MESSAGE</button>
        </form>
       </div>
    </div>
  )
}

export default Contact