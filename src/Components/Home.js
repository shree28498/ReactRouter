import React from 'react'
import $ from "jquery";
import { Link } from 'react-router-dom';
import '../Stylesheet/Home.css'
import Services from './Services';

const Home = () => {

  $(document).ready(function(){
    $("#driveWithUs").click(function(){
      window.location.href = "http://localhost:3000/contact-us"
    })
  });

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
      <div className='homeComp'>
        <div className="wrapper1">
          <h1 className='title'>Leading the way in<br />Logistic Solutions.</h1>
          <p className='title-text'>We are special in developing local logistics through an attentive and customer centric culture.</p>
          {/* <button id='driveWithUs' className='btn'>DRIVE WITH US</button> */}
          <Link to="/contact-us" className='links' ><button id='driveWithUs' className='btn Button'>DRIVE WITH US</button></Link>
        </div>
        {/* <div className="wrapper2">
          <Services />
        </div> */}
        {/* <div className='mt-5'>
          <GetAQuote />
        </div> */}
      </div>
    </div>
  )
}

export default Home;