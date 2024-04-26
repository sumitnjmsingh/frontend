import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home.jsx'
import Footer1 from './components/Footer/Footer1.jsx'
import Header1 from './components/Header/Header1.jsx'
import {useLocation} from 'react-router-dom'

function Layout() {


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedImageData = searchParams.get('imageAddress');

  const imageAddress = JSON.parse(decodeURIComponent(encodedImageData));
  

  return (
    <>
    {/* <div className='w-[100%] h-[100%] relative'> */}
    <Header1 count={imageAddress.count}/>
    
    <Outlet/>
   
    <Footer1/>
    {/* </div> */}
    </>
  )
}

export default Layout