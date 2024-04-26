import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


import {FcApproval} from 'react-icons/fc'
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import {Link, NavLink} from 'react-router-dom'

function Footer1() {
  return (
    <>
    <div className='h-[50vh]  grid grid-cols-[1fr_1fr_1fr_1fr_2.5fr] pt-[30px] border-t-[solid] border-t-[black] border-t-[2px] rounded-[5px]'>
        <div>
            <ul className='flex flex-col lg:gap-[40px] md:gap-[55px] place-items-center font-semibold lg:text-[20px] md:text-[12px] '>
                <li className='font-bold'>COMPANY</li>
                <li className='font-bold'>FAQ</li>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
        </div>
        <div>
        <ul className='flex flex-col lg:gap-[40px] md:gap-[55px] place-items-center font-semibold lg:text-[20px] md:text-[12px] '>
                <li className='font-bold'>HELP & CONTACT</li>
                <li>Help Center</li>
                <li>Email Us</li>
                <li>080-4042-4242</li>
                
            </ul>
        </div>
        <div>
        <ul className='flex flex-col lg:gap-[40px] md:gap-[55px] place-items-center font-semibold lg:text-[20px] md:text-[12px] '>
                <li className='font-bold'>MORE FROM US</li>
                <li>Bulk/Party Order</li>
                <li>Cake Order</li>
                <li>FreshClub</li>
                <li>Offers</li>
            </ul>
        </div>
        <div>
           
        </div>
    <div className='flex flex-col lg:gap-[25px] md:gap-[60px] justify-start'>
        <div className='font-bold'>SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</div>
        <div className='flex'>
              <input type="email" placeholder='Enter your email....' className='border-[solid] border-[black] border-[2px] rounded-[5px] lg:w-[400px] md:w-[200px] lg:h-[45px] md:h-[40px] p-[20px]'></input>
              <div className='border-[solid] border-[black] border-[2px] rounded-[5px] w-[100px] h-[45px] p-[10px] bg-[black] text-[white]'>SUBSCRIBE</div>
        </div>
        <div className='grid grid-cols-5   lg:mt-[60px] md:mt-[40px]'>
            <div className='text-[30px]'><FaInstagram /></div>
            <div className='text-[30px]'> <FaFacebook /></div>
            <div className='text-[30px]'><FaGithub /></div>
            <div className='text-[30px]'><FaSquareXTwitter /></div>        
        </div>
    </div>
    </div>
    <div className='h-[30vh] bg-black'>
    <div className=' h-[100%] grid grid-cols-[45%_55%]'>
        <div className='grid grid-cols-1  justify-items-start pl-20'>
          <h1 className='text-white text-[2rem] md:text-[2rem]'>Get In Touch  </h1>
          <div className='flex text-[1.2rem]  md:text-[2rem] text-white justify-around items-center gap-2 md:gap-2'><div  ><FcApproval/></div><div><SlSocialLinkedin /></div><div><TiSocialYoutube /></div><div><SlSocialInstagram /></div><div><SlSocialPintarest /></div><div><FaGithub /></div></div>
          <p className='text-white text-[0.7rem] md:text-[1rem]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo in magni commodi pariatur corrupti, assumenda blanditiis id natus dolore quasi inventore eius veritatis. Iste animi qui quod molestias facilis!</p>
        </div>
        <div className='pt-10 overflow-auto'>
        <p className='text-white text-[0.7rem] md:text-[1rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo in magni commodi pariatur corrupti, assumenda blanditiis id natus dolore quasi inventore eius veritatis. Iste animi qui quod molestias facilis!</p>
        <p className='text-white text-[0.7rem] md:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo in magni commodi pariatur corrupti, assumenda blanditiis id natus dolore quasi inventore eius veritatis. Iste animi qui quod molestias facilis!</p>
        </div>
       </div>
    </div></>
  )
}

export default Footer1