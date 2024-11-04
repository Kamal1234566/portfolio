import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped,Typed } from "react-typed";
import hack from'./hack.avif';
const Home = () => {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
      <div className='flex flex-col md:flex-row mt-12 md:mt-14 space-y-2'>
        <div className='md:w-1/2 order-2 md:order-1'><span className='text-xl'>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello ,I'm a</h1>
        <ReactTyped className='text-red-700 font-bold'
          strings={["Developer","Programer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br/>
       
        <p className='text-sm md:text-md text-justify'>A full-stack web developer is skilled in both frontend and backend development, enabling them to build complete, dynamic web applications. They work with a variety of tools and frameworks, such as React for the frontend and Node.js or Django for the backend. Full-stack developers handle everything from designing user interfaces to managing databases and server configuration. Their versatility allows them to oversee the entire development lifecycle, making them highly valuable in tech teams.</p>
       <br/>
       <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
       <div className='space-y-2'>
        <h1 className='font-bold '>Available on</h1>
        <ul className='flex space-x-5'>
          <li>
            <a href="https://www.facebook.com/" target='_blank'>
            <FaSquareFacebook  className='text-2xl cursor-pointer'/></a></li>
          <li>
          <a href="https://www.linked.com/" target='_blank'>
            <FaLinkedin className='text-2xl cursor-pointer'/>
            </a></li>
          <li>
          <a href="https://www.youtube.com/" target='_blank'>
            <IoLogoYoutube className='text-2xl cursor-pointer'/>
            </a></li>
          <li>
          <a href="https://www.telegram.com/" target='_blank'>
            <FaTelegram className='text-2xl cursor-pointer'/></a></li>
          </ul>
       </div>
       <div>
       <div className='space-y-2'>
        <h1 className='font-bold'>Currently working on </h1>
        <div className='flex space-x-5'>
         <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
         <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/> 
         <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
         <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
          </div>
       </div>
       </div>
       </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-25 order-1 mt-5'><img src={hack} className="rounded-full md:h-[450px] md:w-[450px]"alt=""/></div>
      </div>
      <br/>
      <hr/>
    </div>
  )
}

export default Home
