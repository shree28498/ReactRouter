import React from 'react'
import { Link } from 'react-router-dom';

const Unknwn = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-links'>
          <Link to="/" className='links' ><span>Home</span></Link>
          <Link to="/about" className='links' ><span>About us</span></Link>
          <Link to="/careers" className='links' ><span>Careers</span></Link>
          <Link to="/services" className='links' ><span>Services</span></Link>
          <Link to="/contact-us" className='links' ><span>Contact us</span></Link>
          <Link to="/unknown" className='links' ><span>Hello</span></Link>
        </div>
        <div className="contactus">
          <div>
            <a href='tel: 336.904.0448' className='links contacts'>
            <img src="https://cdn-icons-png.flaticon.com/512/3616/3616215.png" className="tel" />
            <span>336.904.0448</span>
            </a>
          </div>
          <div>
            <a href='mailto:info@x-factorusa.com' className='links contacts'>
            <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png" className="mail" />
            <span>info@x-factorusa.com</span>
            </a>
          </div>
        </div>
      </div>
      <h1 style={{textAlign: "center"}}>Kaise ho</h1>
    </div>
  )
}

export default Unknwn;