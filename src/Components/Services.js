import React from 'react'
import { Link } from 'react-router-dom';
import dynamicLoadingImg from '../images/dynamic-loading.jpg'
import '../Stylesheet/Services.css'

const Services = () => {
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
      <div className="comp">
        <div className="dynamic-load-img-box">
          <img src={dynamicLoadingImg} alt="" className="img-responsive dynamic-load-img" />
        </div>
        <div className="about-services">
          <p className="services-text-block">SERVICES</p>
          <h1 className="services-title">Dynamic Load Planning and Dispatching.</h1>
          <p className="services-text">We know how you think about managing your truckload network. Whether you are a 
                                      shipper making sure you are moving the right loads with your dedicated fleet, or a carrier 
                                      making sure the right drivers are taking the right load, We plan for uncertainty, and constantly 
                                      creates dynamic plans that have the highest probability of being profitable and on time, even 
                                      if the unexpected happens.</p>
          <button className="btn Button">GET A QUOTE</button>
        </div>
      </div>
    </div>
  )
}

export default Services
