import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <nav className='navbar active'>
      <ul className='row'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Centers</Link></li>
          <li><Link to="/batches">Batches</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className='hamburger active'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
    </>
    
  )
}

export default Header