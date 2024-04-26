import React from 'react'
import imag from '../../source.png'

function Card({img}) {
  return (
    <div  className='w-[100%] h-[100%] bg-[#cd3939]  flex justify-center flex-col items-center border-white border-solid  border-[2px] rounded-[50px] ' >
        <h1 className='text-white text-[100%]  pt-5'>CARD ALWAYS</h1>
        <div className='w-[70%] h-[50%] relative m-auto  '>
            <img src={img} className='w-[100%] h-[100%]  '></img>
        </div>
        <div className='flex justify-center pb-10 '>
            <p className='text-white lg:text-[98%]  text-[58%] px-20  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aut quisquam adipisci eveniet qui impedit rem, quam, itaque maxime eligendi sed delectus corporis, optio rerum nobis hic quidem autem quas!</p>
        </div>
    </div>
  )
}

export default Card