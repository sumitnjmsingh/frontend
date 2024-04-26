import React,{useState, useHistory} from 'react'
// import { useHistory } from 'react-router-dom';

function User() {

  const [USER,setUser]=useState({
    name:"",email:"",password:"",number:""
  })

  const history = useHistory();

  let name,value
  const handleinput=(e)=>{
    //  console.log(e)
     name=e.target.name
     value=e.target.value
     setUser({...USER, [name]:value})

  }
const Postdata=async (e)=>{
  console.log("jaadu!!!")
  e.preventDefault();
  const {name,email,password,number}=USER;
  const res=await fetch("http://localhost:4000/register",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,email,password,number
  })
});
 const data=await res.json();
 console.log("data",data);
 history.push("/main");
 
//  if(data.status===201){
//   console.log("success")
//  }


};


  return (
    <div className='w-[100%] h-[72vh] bg-green-500 flex justify-center items-center '>
      <div className='w-[25%] h-[75%] bg-white p-[4px] rounded-[10px]' >
        <h1 className='text-[20px] '>REGISTER Here!</h1>
       <form method="POST" className='grid grid-cols-1 m-[1.5rem] justify-items-center '>
        <label htmlFor='name'></label> 
        <input onChange={handleinput} type="text" name="name" id="name" autoComplete='off' placeholder='Enter your username....'  value={USER.name}  className='h-[60%] w-[80%] m-[1.5rem] border-[black] border-[solid] border-[2px] rounded-[20px] p-[5px] text-[12px] bg-[rgba(0,0,0,0.2)] text-[black]' ></input>

        <label htmlFor='email'></label> 
        <input onChange={handleinput} type="email" name="email" id="email" autoComplete='off' placeholder='Enter your email....'  value={USER.email} className='h-[60%] w-[80%] m-[1.5rem] border-[black] border-[solid] border-[2px] rounded-[20px] p-[5px] text-[12px] bg-[rgba(0,0,0,0.2)] text-[black]' ></input>

        <label htmlFor='password'></label> 
        <input onChange={handleinput} type="password" name="password" id="password" autoComplete='off' placeholder='Enter your password....'  value={USER.password} className='h-[60%] w-[80%] m-[1.5rem] border-[black] border-[solid] border-[2px] rounded-[20px] p-[5px] text-[12px] bg-[rgba(0,0,0,0.2)] text-[black]' ></input>

        <label htmlFor='number'></label> 
        <input onChange={handleinput} type="text" name="number" id="number" autoComplete='off' placeholder='Enter user mob.no.....'  value={USER.number} className='h-[60%] w-[80%] m-[1.5rem] border-[black] border-[solid] border-[2px] rounded-[20px] p-[5px] text-[12px] bg-[rgba(0,0,0,0.2)] text-[black]' ></input>
       
       <div className='h-[30px] w-[90%] ' >
        <button onClick={Postdata}  className='h-[100%] w-[100%] bg-[rgb(98,243,108)] rounded-[20px]'  name="signup" id="signup" >REGISTER HERE!</button>
       </div>

       </form>
      </div>
    </div>
  )
}

export default User