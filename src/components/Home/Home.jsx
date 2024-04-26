import React,{useState} from 'react'
import Card from '../cards/Card.jsx'
import Item from '../Img.jsx'
import { FcSearch } from "react-icons/fc";

function Home() {

  const [Itm,setItm]=useState(Item)

  return (
    <>
    <div className='w-[100%] h-[100vh] bg-[url("source1.png")] bg-[no-repeat] bg-cover bg-center'></div>
    <div className='w-[100%] h-[100vh] bg-[url("source3.png")] bg-[no-repeat] bg-cover bg-center'></div>
    <div  className=' w-full h-full bg-[url("back.png")] bg-[cover] bg-[no-repeat] bg-[#dfd8d8] grid md:grid-cols-[1fr_1fr_1fr]  gap-4 p-10 place-items-center relative'>
      


      {Itm.map((item) => {
    const { img } = item;
    return (
      
      <div  className='  h-[20rem] lg:w-[40rem] w-[20rem] z-10 '>
        <Card img={img} />
      </div>
      
    );
  })}
        {/* <div className='w-[100%] h-[100vh] relative text-[center]'>
          <input className='w-[60%] h-[4rem] bg-[rgba(0,0,0,0.5)] absolute top-[50%] left-[5%] p-10 text-[2rem] text-[white] rounded-[2rem] border-[2px] border-[solid] border-[white]' type="text"  placeholder="Search for your favourite food......." ></input>
          <span bg-white className='absolute top-[50%] left-[65%] text-[4rem]'><FcSearch /></span>
        </div> */}
        <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] absolute top-[0px] left-[0px] '>
      </div>
  
  </div>
</>
    
  )
}

export default Home