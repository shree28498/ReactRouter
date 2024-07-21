import React from 'react'
import $ from "jquery"
import '../Stylesheet/Contact.css'

const Contact = () => {

    $(document).ready(function () {

        $('#phoneNumber').on('input', function (event) {
            event.target.value=event.target.value.replace(/[^+\d]/g, "");// this line for user can't type any alphabet char
            // event.target.value = event.target.value.replace(/^[0-9]/g, "");
            const maxLength = 10;
            const inputValue = $(this).val();

            if (inputValue.length > maxLength) {
                $(this).val(inputValue.slice(0, maxLength)); // Trim input if it exceeds 10 digits
            }
        });

        $("#submitContact").click(e => {
            e.preventDefault();
            contactformValidate();
        });

        function blurFunction() {

            let isValid = true;

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

            function validateEmail(email) {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            }

            $("#firstname").on("input blur", function () {
                if ($(this).val().trim() == "") {
                    showError("#firstnameError", "Please enter your first name.");
                } else if ($(this).val().trim().length < 3) {
                    showError("#firstnameError", "First name must be atleast 3 Character.")
                } else {
                    clearError("#firstnameError");
                }
            });

            $("#lastname").on("input blur", function () {
                if ($(this).val().trim() == "") {
                    showError("#lastnameError", "Please enter your last name.");
                } else if ($(this).val().trim().length < 3) {
                    showError("#lastnameError", "Last name must be atleast 3 Character.")
                } else {
                    clearError("#lastnameError");
                }
            });

            $("#phoneNumber").on("input blur", function () {
                if ($(this).val().trim() == "") {
                    showError("#phoneNumberError", "Please enter your mobile number.");
                } else if ($(this).val().trim().length < 10) {
                    showError("#phoneNumberError", "Phone number must be 10 Character.")
                } else {
                    clearError("#phoneNumberError");
                }
            });

            $("#emailId").on("input blur", function () {
                var email = $(this).val();
                if (email === "") {
                    showError("#emailIdError", "Please enter your email address.");
                } else if (!validateEmail(email)) {
                    showError("#emailIdError", "Email must be formatted correctly.");
                } else {
                    clearError("#emailIdError");
                }
            });

            $("#adress").on("input blur", function () {
                if ($(this).val().trim() == "") {
                    showError("#addressError", "Please complete this required field.");
                } else {
                    clearError("#addressError");
                }
            });

        }
        blurFunction();

        function contactformValidate() {
            const firstname = $("#firstname").val();
            const lastname = $("#lastname").val();
            const phone = $("#phoneNumber").val();
            const email = $("#emailId").val();
            const address = $("#adress").val();

            let isValid = true;

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

            function validateEmail(email) {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            }

            if (firstname == "") {
                showError("#firstnameError", "Please enter your first name.")
            } else if (firstname.length < 3) {
                showError("#firstnameError", "First name must be atleast 3 Character.")
            } else {
                clearError("#firstnameError")
            }

            if (lastname == "") {
                showError("#lastnameError", "Please enter your last name.");
            } else if (lastname.length < 3) {
                showError("#lastnameError", "Last name must be atleast 3 Character.");
            } else {
                clearError("#lastnameError");
            }

            if (phone == "") {
                showError("#phoneNumberError", "Please enter your mobile number.");
            } else if (phone.length < 10) {
                showError("#phoneNumberError", "Phone number must be 10 Character.");
            } else {
                clearError("#phoneNumberError");
            }

            if (email == "") {
                showError("#emailIdError", "Please enter your email address.");
            } else if (!validateEmail(email)) {
                showError("#emailIdError", "Please enter a valid email address.");
            } else {
                clearError("#emailIdError");
            }

            if (address == "") {
                showError("#addressError", "Please complete this required field.")
            } else {
                clearError("#addressError")
            }

            if (isValid) {
                const data = {
                    'inputParameter': [{
                        'firstname': firstname,
                        'lastname': lastname,
                        'email': email,
                        'phoneNumber': phone,
                        'address': address
                    }]
                }
                console.log(data);
            }

        }

    });

  return (
    <div className='contact'>
        <div className="contactformdiv">
            <form id='contactForm'>
                <p>CONTACT US</p>
                <div className="first-two-line">
                    <div className="inputBox">
                        <input type="text" className='form-control' id="firstname" maxLength="40" autoComplete='off' placeholder='Firstname*'/>
                        <span id="firstnameError" className="error"></span>
                    </div>
                    <div className="inputBox">
                        <input type="text" className='form-control' id="lastname" maxLength="40" autoComplete='off' placeholder='Lastname*'/>
                        <span id="lastnameError" className="error"></span>
                    </div>
                </div>
                <div className="first-two-line">
                    <div className="inputBox">
                        <input type="number" className='form-control' id="phoneNumber" maxLength="10" autoComplete='off' placeholder='Phone Number*'/>
                        <span id="phoneNumberError" className="error"></span>
                    </div>
                    <div className="inputBox">
                        <input type="email" className='form-control' id="emailId" maxLength="80" autoComplete='off' placeholder='Email*'/>
                        <span id="emailIdError" className="error"></span>
                    </div>
                </div>
                <div className="first-two-line">
                    <div className="inputBox">
                        <input type="text" className='form-control' id="adress" autoComplete='off' placeholder='Street Address*'/>
                        <span id="addressError" className="error"></span>
                    </div>
                </div>
                <input type="submit" id='submitContact' className='btn btn-primary' value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default Contact
