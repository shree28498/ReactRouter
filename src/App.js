import React from 'react';
import './App.css';
// import { Route, Link} from 'react-router-dom'
// import {Switch} from 'react-router'
import { createBrowserRouter, 
         createRoutesFromElements, 
         Route , 
         Routes,
         Link, 
         Outlet, 
         RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Careers from './Components/Careers';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Unknwn from './Components/Unknwn';
import GetAQuote from './Components/GetAQuote';

function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Root />} >
  //       <Route index element={<Home />} />
  //       <Route element={<About />} />
  //     </Route>
  //   )
  // )

  return (
   <div>
    
    {/* <div className="user">
      <h1>React Router</h1>
      <RouterProvider router={router} />
    </div> */}
    
   <Routes >
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/careers' element={<Careers />} />
    <Route path='/services' element={<Services />} />
    <Route path='/contact-us' element={<ContactUs />} />
    <Route path='/get-quote' element={<GetAQuote />} />
    <Route path='/unknown' element={<Unknwn />} />
   </Routes>
   </div>
  );
}


export default App;