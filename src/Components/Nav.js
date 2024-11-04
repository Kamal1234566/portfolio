import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';
const Nav = () => {
    const[menu,setMenu]=useState(false);
    const navItems=[
      {
        id:1,
        text:"Home"
      },
      {
        id:2,
        text:"About"
      },
      {
        id:3,
        text:"Portfolio"
      },
      {
        id:4,
        text:"Experience"
      },
      {
        id:5,
        text:"Contact"
      }
    ]
  return (
    <div  className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white"> 
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
            <img src="" className='h-12 w-12 rounded-full' alt=""/>
            <h1 className='font-semibold text-xl cursor-pointer'>Kama<span className='text-green-500 text-2xl'>l</span>
             <p className='text-sm'>Web Developer</p></h1>
        </div>
        <div>
            <ul className='hidden md:flex space-x-8'>
                {
                  navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}><Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link></li>
                  ))
                }
            </ul>
        <div onClick={()=>setMenu(!menu)}className='md:hidden'>{menu? <IoClose size={24}/>:<FiMenu size={24} />}</div>
        </div>
      </div>
      {menu&&(<div className='bg-white'>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center text-xl'>
        {
                  navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}><Link 
                    onClick={()=>setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link></li>
                  ))
                }
        </ul>
      </div>)}
      
    </div>
  )
}

export default Nav
