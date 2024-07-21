import React from 'react'
import { Link } from 'react-router-dom';
import '../Stylesheet/About.css'

const About = () => {
  return (
    <div>
      {/* This is navbar componnt */}
      <div className='navbar'>
        <div className='nav-links'>
          <Link to="/" className='links' ><span>Home</span></Link>
          <Link to="/about" className='links' ><span>About us</span></Link>
          <Link to="/careers" className='links' ><span>Careers</span></Link>
          <Link to="/services" className='links' ><span>Services</span></Link>
          <Link to="/contact-us" className='links' ><span>Contact us</span></Link>
          <Link to="/get-quote" className='links' ><span>Get Quotes</span></Link>
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
      {/* This is navbar componnt is end*/}
      <div className='about-comp'>
        <div className="abts-content">
          <p >ABOUT US</p>
          <h1 className=''>Safe, Reliable & Express logistic solution that saves your time!</h1>
          <div className="list mt-2">
            <div className="leftList">
              <p>Real Time Tracking</p>
              <p>Environment Sensitivity</p>
              <p>Warehouse Storage</p>
              <p>Security for Trucks</p>
            </div>
            <div className="rightList">
              <p>Profrssional and Qualified</p>
              <p>Fost & Efficient Delivery</p>
              <p>Easy Payment Methods</p>
              <p>Personalised Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
