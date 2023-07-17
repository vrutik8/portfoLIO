import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="flex">
    <div className="logo">
       Port 
       <span>folio.</span>
    </div>
    <div className="nav-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </div>
    </div>
    </>
  )
}

export default Navbar;