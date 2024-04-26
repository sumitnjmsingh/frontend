import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards/Card.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Front_food from "./Front_food.jsx"

import Contact from './components/Contact/Contact.jsx'
import Cart from './components/Cart/Cart.jsx'
import User from './components/User/User.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Add from './components/Home/Addtocart.jsx'

  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Register />} /> 
        <Route path="/main" element={<Front_food />} /> 
        <Route path="/main2" element={<Layout />}>
          <Route index element={<Add />} />
           {/* <Route path="about" element={<About />} />
          <Route path="user" element={<User />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};




export default App
