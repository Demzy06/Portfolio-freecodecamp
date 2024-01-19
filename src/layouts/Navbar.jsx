import React from 'react'
import '../Styles/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
  return (
    <div className='Nav'>
      {/*Navbar  */}
      <nav className='d-flex align-items-center justify-content-evenly list-unstyled text-light'>
  
      <li>
        <Link smooth to='#About' className='text-decoration-none text-light' >
          About
        </Link>
      </li>
      <li>
        <Link smooth to='#hero' className='text-decoration-none text-light'>
          Work
        </Link>
      </li>
      <li>
        <Link to='#contact' className='text-decoration-none text-light'>
          Contact
        </Link>
        </li>
        
      </nav>
    </div>
  )
}

export default Navbar