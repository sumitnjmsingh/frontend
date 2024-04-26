import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='w-[100%] h-[5rem]  grid grid-cols-[30%_70%]    bg-[rgb(57,53,53)] items-center border-b-2 border-[solid]  border-[white] ' >
      <div className='justify-self-end' >
       <h1 className='text-[#efad4a] text-[10px] p-l-3  md:text-[20px] tracking-[10px] font-bold'> FOOD FRENZY</h1>
      </div>
       <div className='grid grid-cols-5 justify-self-end items-center  '> 
        <Link to='/main2' className='text-white text-[0.83rem]  md:text-[1.5rem]' >Home</Link>
        <Link to='/main2/about' className='text-white m-4 text-[0.83rem]   md:text-[1.5rem]' >About Us</Link>
        <Link to='/main2/user' className='text-white m-4 text-[0.83rem] md:text-[1.5rem]' >Profile</Link>
        <Link to='/main2/contact' className='text-white m-4 text-[0.83rem] md:text-[1.5rem]' >Contact Us</Link>
        <Link to='/main2/cart' className='text-white m-4 text-[0.83rem] md:text-[1.5rem]' >Add to Cart</Link>
        </div>  
    </div>
  )
}

export default Header