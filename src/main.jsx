import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Front_food from './Front_food.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'




import Contact from './components/Contact/Contact.jsx'
import Cart from './components/Cart/Cart.jsx'
import User from './components/User/User.jsx'
// import Test from './Test.jsx'
import Footer1 from './components/Footer/Footer1.jsx'
import Header1 from './components/Header/Header1.jsx'
import Add from './components/Home/Addtocart.jsx'



import {  Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
    <Route path='' element={<Home/>} ></Route>   
    <Route path='about/' element={<About/>} ></Route>   
    <Route path='user/' element={<User/>} ></Route>   
    <Route path='contact/' element={<Contact/>} ></Route>   
    <Route path='cart/' element={<Cart/>} ></Route>   
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    
    <App/>
      
    
   
  </React.StrictMode>,
)
