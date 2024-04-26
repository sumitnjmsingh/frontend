import React,{useState,useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [USER,setUser]=useState({
    name:"",email:"",password:"",number:""
  })
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
  
const {name,email,password,number}=USER;
const res=await fetch("http://localhost:5000/register",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,email,password,number
  })
});
 const data=await res.json();
 console.log(data.redirectTo)

 
 
 navigate(data.redirectTo);



};


  return (
    <div className='w-[100%] h-[100vh] bg-[url("source3.png")] bg-[no-repeat] bg-cover bg-center font-Lobster  '>
      <div className='w-[100%] h-[100%] bg-[hsla(0,0%,100%,0)] flex justify-center items-center  '>
       
      <div className='lg:w-[25%] h-[75%] md:w-[45%] bg-[rgba(50,48,48,0.90)] p-[4px] rounded-[20px] relative lg:pt-[4px] md:pt-[9%]' id="parent" 
       onMouseEnter={() => setIsParentHovered(true)}
       onMouseLeave={() => setIsParentHovered(false)}>
      <div className={`absolute bottom-[0px] left-[0px] bg-[#767e86] w-[100%] transition-height duration-1000 ease-in   ${isParentHovered ? 'h-full opacity-100' : 'h-[0%] opacity-0'}  rounded-[20px] p-[4px] z-[1] `}></div>
        <div className='flex justify-center p-[5px]'>
        <h1 className='text-[20px] text-white z-[2333] '>REGISTER Here!</h1></div>
       <form method="POST" className='grid grid-cols-1 m-[1rem] justify-items-center gap-[1px]  '>
        <label htmlFor='name'></label> 
        <input onChange={handleinput} type="text" name="name" id="name" autoComplete='off' placeholder='Enter your username....'  value={USER.name}  className='h-[60%] w-[80%] m-[1.5rem] border-[white] border-[solid] border-[3px] rounded-[20px] p-[5px] text-[15px] bg-[rgba(0,0,0,0.5)] text-[white] z-[2333]' ></input>

        <label htmlFor='email'></label> 
        <input onChange={handleinput} type="email" name="email" id="email" autoComplete='off' placeholder='Enter your email....'  value={USER.email} className='h-[60%] w-[80%] m-[1.5rem] border-[white] border-[solid] border-[3px] rounded-[20px] p-[5px] text-[15px] bg-[rgba(0,0,0,0.5)] text-[white] z-[2333]' ></input>
        
        <label htmlFor='password'></label> 
        <input onChange={handleinput} type="password" name="password" id="password" autoComplete='off' placeholder='Enter your password....'  value={USER.password} className='h-[60%] w-[80%] m-[1.5rem] border-[white] border-[solid] border-[3px] rounded-[20px] p-[5px] text-[15px] bg-[rgba(0,0,0,0.5)] text-[white] z-[2333]' ></input>

        <label htmlFor='number'></label> 
        <input onChange={handleinput} type="text" name="number" id="number" autoComplete='off' placeholder='Enter user mob.no.....'  value={USER.number} className='h-[60%] w-[80%] m-[1.5rem] border-[white] border-[solid] border-[3px] rounded-[20px] p-[5px] text-[15px] bg-[rgba(0,0,0,0.5)] text-[white] z-[2333]' ></input>
       
       <div className=' z-[2333] h-[35px] w-[90%] mt-10px ' >
        <button onClick={Postdata}  className=' z-[2333] h-[100%] w-[100%] bg-[rgb(98,243,108)] rounded-[20px]  border-[3px] border-[solid] border-[white] text-[15px]'  name="signup" id="signup" >REGISTER HERE!</button>
       </div>
       

       </form>
       <div className='flex  flex-cols justify-center pt-[10px]'>
        <Link to="/login" className='text-white text-[15px] z-[2333]'>ALREADY REGISTERED,LOGIN HERE!</Link>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Login