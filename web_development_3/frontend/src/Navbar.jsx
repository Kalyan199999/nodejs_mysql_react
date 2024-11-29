

import { Link } from "react-router-dom"

function Navbar() {
  return (
    <ul className='navbar'>
      
      <Link to={"/"} ><li className="navbar-child">Home</li></Link>
      <Link to={'/about'}><li className="navbar-child">About</li></Link>
      <Link to='/contactus'><li className="navbar-child">Contact Us</li></Link>
      <Link to="/login-register"><li className="navbar-child">Login/Register</li></Link>
      <Link to="/profile"><li className="navbar-child profile">profile</li></Link>

    </ul>
  )
}

export default Navbar
