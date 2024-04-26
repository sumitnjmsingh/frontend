import React from 'react'
import {FcApproval} from 'react-icons/fc'
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-[100%] h-[15rem] bg-[#383535] relative bottom-[0px] left-[0px]'>
       <div className='w-[100%] h-[100%] grid grid-cols-[45%_55%]'>
        <div className='grid grid-cols-1  justify-items-start pl-20'>
          <h1 className='text-white text-[2rem] md:text-[4rem]'>Get In Touch  </h1>
          <div className='flex text-[1.2rem]  md:text-[2.5rem] text-white justify-around items-center gap-2 md:gap-10'><div  ><FcApproval/></div><div><SlSocialLinkedin /></div><div><TiSocialYoutube /></div><div><SlSocialInstagram /></div><div><SlSocialPintarest /></div><div><FaGithub /></div></div>
          <p className='text-white text-[0.7rem] md:text-[1.2rem]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo in magni commodi pariatur corrupti, assumenda blanditiis id natus dolore quasi inventore eius veritatis. Iste animi qui quod molestias facilis!</p>
        </div>
        <div className='pt-10 overflow-hidden'>
        <p className='text-white text-[0.7rem] md:text-[1.2rem] pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo in magni commodi pariatur corrupti, assumenda blanditiis id natus dolore quasi inventore eius veritatis. Iste animi qui quod molestias facilis!</p>
        <p className='text-white text-[0.7rem] md:text-[1.2rem] pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo in magni commodi pariatur corrupti, assumenda blanditiis id natus dolore quasi inventore eius veritatis. Iste animi qui quod molestias facilis!</p>
        </div>
       </div>
    </div>
  )
}

export default Footer