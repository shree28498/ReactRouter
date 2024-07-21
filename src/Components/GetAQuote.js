import React, {useState} from 'react'
import $ from "jquery";
import { Link } from 'react-router-dom';
import '../Stylesheet/GetAQuote.css'
import States from '../Child Components/States';
import Maharashtra from '../Child Components/Maharashtra';
import AndamanNicobar from '../Child Components/AndamanNicobar';
import AndhraPradesh from '../Child Components/AndhraPradesh';
import ArunachalPradesh from '../Child Components/ArunachalPradesh';
import Assam from '../Child Components/Assam';
import Bihar from '../Child Components/Bihar';
import Chhattisgarh from '../Child Components/Chhattisgarh';
import DadraNagar from '../Child Components/DadraNagar';
import Goa from '../Child Components/Goa';
import Gujarat from '../Child Components/Gujarat';
import Haryana from '../Child Components/Haryana';
import HimachalPradesh from '../Child Components/HimachalPradesh';
import JammuKashmir from '../Child Components/JammuKashmir';
import Jharkhand from '../Child Components/Jharkhand';
import Karnataka from '../Child Components/Karnataka';
import Kerala from '../Child Components/Kerala';
import Lakshadweep from '../Child Components/Lakshadweep';
import MadhyaPradesh from '../Child Components/MadhyaPradesh';
import Manipur from '../Child Components/Manipur';
import Meghalaya from '../Child Components/Meghalaya';
import Mizoram from '../Child Components/Mizoram';
import Nagaland from '../Child Components/Nagaland';
import Odhisha from '../Child Components/Odhisha';
import Puducherry from '../Child Components/Puducherry';
import Punjab from '../Child Components/Punjab';
import Rajasthan from '../Child Components/Rajasthan';
import Sikkim from '../Child Components/Sikkim';
import TamilNadu from '../Child Components/TamilNadu';
import Telangana from '../Child Components/Telangana';
import Tripura from '../Child Components/Tripura';
import Uttarakhand from '../Child Components/Uttarakhand';
import UttarPradesh from '../Child Components/UttarPradesh';
import WestBengal from '../Child Components/WestBengal';

const GetAQuote = () => {

  const [city, setCity] = useState(null);
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     company: '',
//     phone: '',
//     email: '',
//     serviceType: '',
//     state: '',
//     city: '',
//     address: '',
//     zipcode: '',
//     origin: '',
//     destination: '',
//     shipment: ''
// });

  $(document).ready(function(){

    $('#zipcode').on('input', function () {
      // Remove non-numeric characters
      $(this).val($(this).val().replace(/\D/g, ''));

      // Limit length to 6 characters
      if ($(this).val().length > 6) {
        $(this).val($(this).val().slice(0, 6));
      }
    });

    const state = $("#state").val();
    $("#state").change(function () {
      const selectedState = $(this).val();

      if (selectedState == "selected") {
        setCity(<option value="selected">Select city</option>);
      }

      if (selectedState === 'Maharashtra') {
        setCity(<Maharashtra />)
      } else if (selectedState === "Andaman and Nicobar Islands") {
        setCity(<AndamanNicobar />)
      } else if (selectedState === "Andhra pradesh") {
        setCity(<AndhraPradesh />)
      } else if (selectedState === "Arunachal Pradesh") {
        setCity(<ArunachalPradesh />)
      } else if (selectedState === "Assam") {
        setCity(<Assam />)
      } else if (selectedState === "Bihar") {
        setCity(<Bihar />)
      } else if (selectedState === "Chandigarh") {
        setCity(<option value="Chandigarh">Chandigarh</option>)
      } else if (selectedState === "Chhattisgarh") {
        setCity(<Chhattisgarh />)
      } else if (selectedState === "Dadra and Nagar Haveli and Daman & Diu") {
        setCity(<DadraNagar />)
      } else if (selectedState === "Delhi") {
        setCity(<option value="Delhi">Delhi</option>)
      } else if (selectedState === "Goa") {
        setCity(<Goa />)
      } else if (selectedState === "Gujarat") {
        setCity(<Gujarat />)
      } else if (selectedState === "Haryana") {
        setCity(<Haryana />)
      } else if (selectedState === "Himachal Pradesh") {
        setCity(<HimachalPradesh />)
      } else if (selectedState === "Jammu & Kashmir") {
        setCity(<JammuKashmir />)
      } else if (selectedState === "Jharkhand") {
        setCity(<Jharkhand />)
      } else if (selectedState === "Karnataka") {
        setCity(<Karnataka />)
      } else if (selectedState === "Kerala") {
        setCity(<Kerala />)
      } else if (selectedState === "Ladakh") {
        setCity(<><option value="Kargil">Kargil</option><option value="Leh">Leh</option></>)                            
      } else if (selectedState === "Lakshadweep") {
        setCity(<Lakshadweep />)
      } else if (selectedState === "Madhya Pradesh") {
        setCity(<MadhyaPradesh />)
      } else if (selectedState === "Manipur") {
        setCity(<Manipur />)
      } else if (selectedState === "Meghalaya") {
        setCity(<Meghalaya />)
      } else if (selectedState === "Mizoram") {
        setCity(<Mizoram />)
      } else if (selectedState === "Nagaland") {
        setCity(<Nagaland />)
      } else if (selectedState === "Odisha") {
        setCity(<Odhisha />)
      } else if (selectedState === "Puducherry") {
        setCity(<Puducherry />)
      } else if (selectedState === "Punjab") {
        setCity(<Punjab />)
      } else if (selectedState === "Rajasthan") {
        setCity(<Rajasthan />)
      } else if (selectedState === "Sikkim") {
        setCity(<Sikkim />)
      } else if (selectedState === "Tamil Nadu") {
        setCity(<TamilNadu />)
      } else if (selectedState === "Telangana") {
        setCity(<Telangana />)
      } else if (selectedState === "Tripura") {
        setCity(<Tripura />)
      } else if (selectedState === "Uttarakhand") {
        setCity(<Uttarakhand />)
      } else if (selectedState === "Uttar Pradesh") {
        setCity(<UttarPradesh />)
      } else if (selectedState === "West Bengal") {
        setCity(<WestBengal />)
      }
    })

    $("#submitBtn").click(function (e) {
      e.preventDefault();
      formValidate();
      // if(isValid){
      //   console.log(formData);
      // }
    });

    let isValid = true;

    function formValidate() {
      const firstname = $("#fname").val();
      const lastname = $("#lname").val();
      const company = $("#companyName").val();
      const phone = $("#phone").val();
      const email = $("#email").val();
      const serviceType = $("#serviceType").val();
      const state = $("#state").val();
      const city = $("#city").val();
      const address = $("#address").val();
      const zipcode = $("#zipcode").val();
      const origin = $("#origin").val();
      const destination = $("#destination").val();
      const shipment = $("#shipment").val();


      function showError(elementId, errorMessage) {
        let errorElement = $(elementId);
        errorElement.text(errorMessage);
        isValid = false;
      }

      function clearError(elementId) {
        let errorElement = $(elementId);
        errorElement.text("");
        isValid = true; // Mark the form as valid when error is cleared
      }

      if (firstname === "") {
        showError("#fnameError", "Please fill the above field.");
      } else {
        clearError("#fnameError");
      }

      if (lastname === "") {
        showError("#lnameError", "Please fill the above field.");
      } else {
        clearError("#lnameError");
      }

      if (company === "") {
        showError("#companyError", "Please fill the above field.");
      } else {
        clearError("#companyError");
      }

      if (phone === "") {
        showError("#phoneError", "Please fill the above field.");
      } else {
        clearError("#phoneError");
      }

      if (email === "") {
        showError("#emailError", "Please fill the above field.");
      } else {
        clearError("#emailError");
      }

      if (serviceType === "") {
        showError("#serviceError", "Please fill the above field.");
      } else {
        clearError("#serviceError");
      }

      if (state == "" || state == null || state == "selected") {
        showError("#stateError", "Please select the state.");
      } else {
        clearError("#stateError")
      }

      if (city == "selected") {
        showError("#cityError", "Please select the city.");
      } else {
        clearError("#cityError")
      }

      if (address === "") {
        showError("#addressError", "Please fill the above field.");
      } else {
        clearError("#addressError");
      }

      if (zipcode === "") {
        showError("#zipcodeError", "Please fill the above field.");
      } else {
        clearError("#zipcodeError");
      }

      if (origin === "") {
        showError("#originError", "Please fill the above field.");
      } else {
        clearError("#originError");
      }

      if (destination === "") {
        showError("#destinationError", "Please fill the above field.");
      } else {
        clearError("#destinationError");
      }

      if (shipment === "") {
        showError("#shipmentError", "Please fill the above field.");
      } else {
        clearError("#shipmentError");
      }

      // if(isValid){
      //   setFormData({
      //     firstname: firstname,
      //     lastname: lastname,
      //     company: company,
      //     phone: phone,
      //     email: email,
      //     serviceType: serviceType,
      //     state: state,
      //     city: city,
      //     address: address,
      //     zipcode: zipcode,
      //     origin: origin,
      //     destination: destination,
      //     shipment: shipment
      //   })
      // }

      console.log({ 'name': firstname, 'lastname': lastname })

      return isValid;
    }
});


  

  return (
    <div>
      <div className='navbar'>
        <div className='nav-links'>
          <Link to="/" className='links' ><span  >Home</span></Link>
          <Link to="/about" className='links' ><span  >About us</span></Link>
          <Link to="/careers" className='links' ><span  >Careers</span></Link>
          <Link to="/services" className='links' ><span  >Services</span></Link>
          <Link to="/contact-us" className='links' ><span  >Contact us</span></Link>
          <Link to="/get-quote" className='links' ><span  >Get Quotes</span></Link>
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
      {/* Navbar end here */}
      <div className="form-wrapper">
        <form >
          <div className='quote-title'>Get a frieght quote</div>
          <div className="first-two-line">
            <div className="inputBox">
              <input type="text" placeholder='First name' id='fname' maxLength="40" autoComplete='off' className='input-size m-y' />
              <span id='fnameError' className="error"></span>
            </div>
            <div className="inputBox">
              <input type="text" placeholder='Last name' id='lname' maxLength="40" autoComplete='off' className='input-size' />
              <span id='lnameError' className="error"></span>
            </div>
          </div>
          <div className="first-two-line">
            <div className="inputBox">
              <input type="text" id='companyName' placeholder='Company' maxLength="40" autoComplete='off' className='input-size m-y' />
              <span id='companyError' className="error"></span>
            </div>
            <div className="inputBox">
              <input type="tel" id='phone' placeholder='Phone' maxLength="10" autoComplete='off' className='input-size' />
              <span id='phoneError' className="error"></span>
            </div>
          </div>
          <div className="first-two-line">
            <div className="inputBox">
              <input type="email" id='email' placeholder='Email' autoComplete='off' className='input-size' />
              <span id='emailError' className="error"></span>
            </div>
            <div className="inputBox">
              <input type="text" placeholder='Service type' autoComplete='off' id='serviceType' className='input-size'/>
              <span id='serviceError' className="error"></span>
            </div>
          </div>
          <div className="first-two-line">
            <div className="inputBox">
              <select defaultValue="selected" name="state" className='input-size m-y' id="state">
                <option value="selected">Select State</option>
                <States />
              </select>
              <span id="stateError" className="error"></span>
            </div>
            <div className="inputBox">
              <select name="city" defaultValue="selected" className='input-size m-y' id="city">
                <option value="selected">Select city</option>
                {city}
              </select>
              <span id="cityError" className="error"></span>
            </div>
          </div>
          <div className="first-two-line">
          <div className="inputBox">
              <input type="text" id='address' placeholder='Street address' autoComplete='off' className='input-size' />
              <span id='addressError' className="error"></span>
            </div>
            <div className="inputBox">
              <input type="number" id='zipcode' placeholder='Zip code' maxLength="6" autoComplete='off' className='input-size'/>
              <span id="zipcodeError" className="error"></span>
            </div>
          </div>
          <div className="first-two-line">
            <div className="inputBox">
              <input type="text" id='origin' placeholder='Origin city' autoComplete='off' className='input-size m-y'/>
              <span id='originError' className="error"></span>
            </div>
            <div className="inputBox">
              <input type="text" id='destination' placeholder='Destination City' autoComplete='off' className='input-size' />
              <span id='destinationError' className="error"></span>
            </div>
          </div>
          <div className="first-two-line">
            <div className="inputBox">
              <input type="text" id='shipment' placeholder='Shipment details' autoComplete='off' className='input-size' />
              <span id='shipmentError' className="error"></span>
            </div>
          </div>
          <button type='submit' id='submitBtn' className="btn Button">REQUEST A QUOTE</button>
        </form>
      </div>
    </div>
  )
}

export default GetAQuote