
const Navbar = ()=>{
    return(
        <nav className="container">
    {/* Logo */}
      <div className="nav-logo">
      <img src="/images/brand-logo.jpg" alt="logo" />
      </div>        
    
    {/* Navbar list */}
      <ul className="nav-links">
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a> </li>
        <li><a href="#">Contact</a></li>
      </ul>  

      <button>Login</button>
      </nav>
    )
}

export default Navbar