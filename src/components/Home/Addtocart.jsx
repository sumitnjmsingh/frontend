import React from 'react'
import { Button } from "../ui/button"
import { IoFastFood } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';


function Addtocart() {
 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedImageData = searchParams.get('imageAddress');

  const imageAddress = JSON.parse(decodeURIComponent(encodedImageData));
  

  return (
    <>
    <div className='lg:h-[100vh] md:h-[90vh]  grid grid-cols-[45%_55%] font-Lobster bg-[#c2ccaa]'>
        <div className=' p-[30px] '>
            <div className=' h-[80%] '>
                <img className="lg:h-[100%] md:h-[80%] rounded-[15px]"src={imageAddress.imageName}></img>
            </div>
            <div className='flex text-[35px] gap-[20px] mt-[15px] pl-[20px]'><FaInstagram /><FaFacebook className='text-blue-500'/><FaSquareXTwitter /></div>
        </div>
        <div className='grid grid-cols-1 grid-rows-6 p-[30px]'>
            <div className=' font-semibold text-[30px]'>
            Scrambled Egg Sausage Brekkie
            </div>
            <div className=' grid grid-cols-1 grid-rows-2'>
                 <div className='self-center text-[30px] flex gap-[10px]'><span className='line-through'>₹ {imageAddress.id}</span> <div className='text-[35px]'>₹ {((imageAddress.id)*35)/100}</div> <span className='text-blue-500'>35% OFF</span> </div>
                 <div className='pl-[10px]'><Button className="bg-[#d86a3a]">ADD</Button></div>
            </div>
            <div className='flex flex-col gap-[5px]'>
                   <h1 className='font-semibold text-[20px]'>DETAILS ABOUT THIS MEAL</h1>
                   <p className='text-[18px]'>Chicken Sausage tossed in a special seasoning spread over a bed of creamy scrambled eggs.</p>
            </div>
            <div className='grid grid-cols-1 grid-rows-2'>
                  <div className='text-[#df9c3e] text-[45px] pl-[20px]'><IoFastFood /></div>
                  <div className='pl-[20px]'>NON VEG</div>
            </div>
            <div className=''>
                 <h1 className='font-semibold text-[20px]'> INGREDIENTS</h1>
                 <p className='text-[18px]'>Scrambled Eggs, Cheese, Onions,, Tomato, Sausages</p>
            </div>
            <div className=' grid grid-cols-1 grid-rows-[30%_70%]'>
                <h1 className='font-bold text-[20px]'>NUTRITION</h1>
                <div className='grid grid-cols-4'>
                    <div className=' flex flex-col'>
                        <h1 className='text-[30px] text-[red]'>198</h1>
                         <p>ENERGY (KCAL)</p>

                    </div>
                    <div className=' flex flex-col'>
                        <h1 className='text-[30px] text-[red]'>3</h1>
                        <p>Carbs (g)</p>
                        </div> 
                    <div className=' flex flex-col'>
                        <h1 className='text-[30px] text-[red]'>12</h1>
                        <p>Protein (g)</p>

                    </div>
                    <div className=' flex flex-col'>
                        <h1 className='text-[30px] text-[red]'>15</h1>
                        <p>Fat (g)</p>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Addtocart