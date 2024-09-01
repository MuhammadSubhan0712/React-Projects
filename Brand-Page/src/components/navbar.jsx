import React from "react"
import './App.css'
const Navbar = ()=>{
    return(
        <nav className="navbar">

      <div>
      <img className="logo" src="/images/brand-logo.jpg" alt="logo" />
      </div>        

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>  

      <button>Login</button>
      </nav>
    )
}

export default Navbar