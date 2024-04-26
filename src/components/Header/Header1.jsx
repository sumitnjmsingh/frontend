import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { RiContactsFill } from "react-icons/ri";
import { IoMdHelpBuoy } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import {useState} from "react"
import {Link, NavLink} from 'react-router-dom'


function Header1({count}) {

    
        // let [count,setcount]=useState(0);
        //  const incrementCount = () => {
        //     setcount(count + 1);}

  return (
    <>
    <div className=' h-[60px] grid grid-cols-[40px_1fr_2fr_3fr_40px] p-[5px] boder-b-[solid] border-b-[2px] border-b-[black]'>
        <div className='bg-[url("/image/logo.svg")] bg-[no-repeat] bg-cover bg-center col-start-2'></div>
        <div className=' col-start-3'></div>
        <div className='bg-[url("offer3.png")] bg-[no-repeat] bg-contain bg-center col-start-4 '></div>
    </div>

    <div className=' h-[60px] grid grid-cols-[40px_4fr_3fr_40px] sticky top-0 left-0 bg-[#f0dada] z-[234]  '>
        <div className=' col-start-2'></div>
        <div className=' col-start-3 grid grid-cols-5 gap-x-[5px]'>

            <div className=' grid grid-cols-[3fr_1fr] place-items-center'>
                <div><input type="text" className=' lg:w-[65px] md:w-[40px] rounded-[20px] border-[solid] border-[black] border-[2px] p-[2px] bg-[#f0dada]' placeholder='Enter food...'></input></div>
                <div className='lg:text-[30px] md:text-[20px]'><FaSearch /></div>
            </div>
            <div className='  grid grid-cols-[3fr_1fr] place-items-center '>
                <div>Latest Offers</div>
                <div className='lg:text-[30px] md:text-[20px] ' ><BiSolidOffer /></div>
            </div>
            <div className=' grid grid-cols-[3fr_1fr] place-items-center'>
                <div>Help Center</div>
                <div className='lg:text-[30px] md:text-[20px]'><IoMdHelpBuoy /></div>
            </div>
            <div className=' grid grid-cols-[3fr_1fr] place-items-center'>
                <div>
                    Log In
                    </div>
                <div className='lg:text-[30px] md:text-[20px]'><RiContactsFill /></div>
            </div>
            <div className=' grid grid-cols-[3fr_1fr] place-items-center'>
                <div>Cart</div>
                <div className='text-[40px] flex relative'><TiShoppingCart /><div className=' text-white font-semibold border-[solid] border-[2px] border-[red] flex text-[15px] w-[19px] h-[19px] justify-center items-center rounded-full bg-[red] absolute top-0 right-0'>{count}</div></div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Header1