import React from 'react'
import Sumit from "./Sumit.jsx"
import { TiShoppingCart } from "react-icons/ti";
import { RiContactsFill } from "react-icons/ri";
import { IoMdHelpBuoy } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import {useState,useEffect} from "react"
import Item from './components/Img1.jsx'


import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {Link, NavLink} from 'react-router-dom'
import {DrawerPlacement} from './components/Home/Drawer.jsx'



import {FcApproval} from 'react-icons/fc'
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";





function Front_food() {
    const [Itm,setItm]=useState(Item)
    let [count,setcount]=useState(0)

    
    

    const [val,setval]=useState(100);
    const [check,setcheck]=useState(true)
    

    
    
     
    
    


    const incrementCount = () => {
        setcount(count + 1);}

        

        

  return (
    <>
    
      
   <div className={`w-[${val}%]  transition-width duration-500 linear`}>
    <div className=' h-[60px]  grid grid-cols-[40px_1fr_2fr_3fr_40px] p-[5px] boder-b-[solid] border-b-[2px] border-b-[black]'>
        <div className='bg-[url("/image/logo.svg")] bg-[no-repeat] bg-cover bg-center col-start-2'></div>
        <div className=' col-start-3'></div>
        <div className='bg-[url("offer3.png")] bg-[no-repeat] bg-contain bg-center col-start-4 '></div>
    </div>

    <div className=' h-[60px] grid grid-cols-[40px_4fr_3fr_40px] sticky top-0 left-0 bg-[#f0dada] z-[234]  '>
        <div className=' col-start-2'></div>
        <div className=' col-start-3 grid grid-cols-5 gap-x-[5px]'>

            <div className=' grid grid-cols-[3fr_1fr] place-items-center'>
                <div><input type="text" className='lg:w-[65px] md:w-[40px] rounded-[20px] border-[solid] border-[black] border-[2px] p-[2px] bg-[#f0dada]' placeholder='Enter food...'></input>
                
                </div>
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
                    <Link to="/register">Log In</Link>
                    </div>
                <div className='lg:text-[30px] md:text-[20px]'><RiContactsFill /></div>
            </div>
            <div className=' grid grid-cols-[3fr_1fr] place-items-center '>
                <div  ><DrawerPlacement className="z-999999 " callback={setval} callback2={setcheck}/></div>
                <div className='text-[40px]  flex relative '><TiShoppingCart className='z-[-1]' /><div className=' text-white font-semibold border-[solid] border-[2px] border-[red] flex text-[15px] w-[19px] h-[19px] justify-center items-center rounded-full bg-[red] absolute top-0 right-0 z-[-1]'>{count}</div></div>
            </div>
        </div> 
       
     </div> 
    <div className='h-[300px] grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[15px] p-[10px]'>
        <div className='bg-[url("/image/food2.png")]  bg-[no-repeat] bg-cover bg-center' ></div>
        <div className='bg-[url("/image/food3.png")]  bg-[no-repeat] bg-cover bg-center'></div>
        <div className='bg-[url("/image/food5.png")]  bg-[no-repeat] bg-cover bg-center'></div>
        <div className='bg-[url("/image/food4.png")]  bg-[no-repeat] bg-cover bg-center'></div>

    </div>
    <div className='h-[50px]'></div>
    <div className='h-[100%]  grid grid-cols-[20%_80%] p-[10px] '>
        <div className=' h-[100vh] sticky top-20 p-[10px] '>
            <ul className='flex flex-col md:gap-[34px] lg:gap-[20px] place-items-center w-[100%] h-[100%]'>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]mt-[50px]`}>CATEGORIES</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>Bowls</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>Noodles</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>Keto and Salads</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>Appetizers</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>Lite Bite</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>Sandwitches</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>Desserts</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>Burgers</li>
                <li className={`bg-[#484242] text-white border-[solid] border-[black]  h-[40px]  lg:w-[200px] md:w-[100px] border-[3px] rounded-[20px] p-[8px]`}>All day breakfast</li>
                <li className='bg-[#484242] text-white border-[solid] border-[black] border-[3px] rounded-[20px] lg:w-[200px] md:w-[100px] p-[8px] mb-[15px]'>Desserts</li> 
            </ul>
        </div>
        <div className=' h-[100%] overflow-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center m-[5px] space-y-2 gap-[3px] '>
         <div className='pt-[15px]'><Sumit img={"/image/img33.jpeg"}/></div>
         

         {Itm.map((item) => {
    const { img } = item;
    return (
      
      
        <Sumit img={img}  onIncrement={incrementCount} count={count} />
      
      
    );
  })}






         
        </div>
    </div>
    <div className='h-[50vh]  grid grid-cols-[1fr_1fr_1fr_1fr_2.5fr] pt-[30px] border-t-[solid] border-t-[black] border-t-[2px] rounded-[5px]'>
        <div>
            <ul className='flex flex-col lg:gap-[40px] md:gap-[55px] place-items-center font-semibold lg:text-[20px] md:text-[12px]'>
                <li className='font-bold'>COMPANY</li>
                <li className='font-bold'>FAQ</li>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
        </div>
        <div>
        <ul className='flex flex-col lg:gap-[40px] md:gap-[55px] place-items-center font-semibold lg:text-[20px] md:text-[12px]'>
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
              <div className='border-[solid] border-[black] border-[2px] rounded-[5px] lg:w-[100px]  h-[45px] p-[10px] bg-[black] text-[white]'>SUBSCRIBE</div>
        </div>
        <div className='grid grid-cols-5 lg:mt-[60px] md:mt-[40px]'>
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
    </div>
    </div>
    </>
  )
}

export default Front_food