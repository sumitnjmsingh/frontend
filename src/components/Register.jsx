import React,{useState,useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Register() {

  const [USER,setUser]=useState({
    name:"",password:""
  })

const [err,seterr]=useState("")

  const navigate = useNavigate();
  const [isParentHovered, setIsParentHovered] = useState(false);
  let name,value
  const handleinput=(e)=>{
    
     name=e.target.name
     value=e.target.value
     setUser({...USER, [name]:value})

  }
const Postdata=async (e)=>{
  e.preventDefault();
  
const {name,password}=USER;
const res=await fetch("http://localhost:5000/login",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,password
  })
});
 const data=await res.json();
 if(res.status==200){
    navigate(data.redirectTo);
 }
 else{
    
    seterr(data.error);
    console.log(data.error)
 }
 

 
 
 



};


  return (
    <div className='w-[100%] h-[100vh] bg-[url("source3.png")] bg-[no-repeat] bg-cover bg-center font-Lobster  '>
      <div className='w-[100%] h-[100%] bg-[rgba(255,255,255,0.17)] flex justify-center items-center '>
      <div className='lg:w-[25%] h-[75%] md:w-[45%] bg-[rgba(50,48,48,0.90)] p-[4px] rounded-[20px] relative lg:pt-[4px] md:pt-[9%]' 
       onMouseEnter={() => setIsParentHovered(true)}
       onMouseLeave={() => setIsParentHovered(false)}>
             <div className={`absolute bottom-[0px] left-[0px] bg-[#666869] w-[100%] transition-height duration-1000 ease-in   ${isParentHovered ? 'h-full opacity-100' : 'h-[0%] opacity-0'}  rounded-[20px] p-[4px] z-[0] `}></div>
        <div className='grid grid-cols-1 justify-center p-[5px] '>
        <h1 className='justify-self-center text-[40px] text-white z-[2333] '>LOGIN Here!</h1>
        <h1 className='text-[15px] text-red-600 text-center z-[2334] '>{err}</h1>
      </div>
       <form method="POST" className='grid grid-cols-1 grid-rows-3 m-[1.0rem] justify-items-center items-center gap-[37px] '>
        
        <input onChange={handleinput} type="text" name="name" id="name" autoComplete='off' placeholder='Enter your username....'  value={USER.name}  className=' z-[2333] h-[70%] w-[80%] m-[1.5rem] border-[white] border-[solid] border-[3px] rounded-[20px] p-[5px] text-[15px] bg-[rgba(0,0,0,0.5)] text-[white]' ></input>

        
        
        
        <input onChange={handleinput} type="password" name="password" id="password" autoComplete='off' placeholder='Enter your password....'  value={USER.password} className='z-[2333] h-[70%] w-[80%] m-[1.5rem] border-[white] border-[solid] border-[3px] rounded-[20px] p-[5px] text-[15px] bg-[rgba(0,0,0,0.5)] text-[white]' ></input>

       
       <div className='h-[45px] w-[90%] mt-10px z-[2333] ' >
        <button onClick={Postdata}  className='h-[100%] w-[100%] bg-[rgb(98,243,108)] rounded-[20px]  border-[3px] border-[solid] border-[white] text-[15px] z-[2333]'  name="signup" id="signup" >LOGIN HERE!</button>
       </div>
       

       </form>
       <div className='flex  flex-cols justify-center pt-[35px] z-[2333]'>
        <Link to="/" className='text-white text-[15px] z-[2333]'>REGISTER HERE!</Link>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Register