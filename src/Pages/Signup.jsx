import React, { useContext } from 'react'

import {Formik, Form, Field, ErrorMessage } from "formik"
import { Fragment } from 'react'
import * as yup from "yup"
import { AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './FireBase-config'
import MyContext from '../Context/Context';


const Signup = () => {
  const {authToken, setAuthToken}= useContext(MyContext)
  const navigate=useNavigate();
  <ErrorMessage name="email" style={{ color: 'red' }} />

  const defaultValue={
    name:'',
    lastname:'',
    email:'',
    number:'',
    password:'',
   
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter First Name"),
    lastname: yup.string().required("Please enter your Last Name"),
    email: yup.string().required("Please enter your email").email("Please enter a valid email"),
    password: yup.string().required(" Example@Abc123"),
    

  });
   
// Initialize Firebase



const handleRegistration = async (values) => {
  const { email, password  } = values;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // const idToken = await user.getIdToken();
    console.log("User registered:", user);
    alert('User registered successfully!');
    // setAuthToken(idToken);
    // navigate('/login');
    
  
  } catch (error) {
    console.error("Error registering user:", error);
    alert('Registration failed. Please try again.');
   
    
    
  }
};

// Use handleRegistration function to register users.







  return (
    <>
   
<Fragment class="">
  <Formik
     initialValues={defaultValue}
     validationSchema={validationSchema}
     onSubmit={handleRegistration }
  >


  <div class="px-4 py-5 singup-page px-md-5 text-center text-lg-start" >
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0 ">
          <h1 class="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span class="text-primary">for your business</span>
          </h1>
          <p class='signup-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <Form>
                
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <Field type="text" name='name' placeholder='First Name' id="form3Example1" class="form-control" />
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <Field type="text" name='lastname' placeholder='Last Name' id="form3Example2" class="form-control" />
                      <ErrorMessage name="lastname" />
                    </div>
                  </div>
                </div>

                

                <div class="form-outline mb-4">
                  <Field type="email" name='email' placeholder='Email Address' id="form3Example3" class="form-control" />
                  <ErrorMessage name="email" style={{ color: 'red' }}  />
                </div>
                <div class="form-outline mb-4">
                  <Field type="text" name='number' placeholder='Number' id="form3Example3" class="form-control" />
                  <ErrorMessage name="number" />
                </div>

                
                <div class="form-outline mb-4">
                  <Field placeholder='Password' name='password' type="password" id="form3Example4" class="form-control" />
                  <ErrorMessage name="password" />
                </div>
                
                

                
                <div class="form-check d-flex justify-content-center mb-4">
                  <Field class="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                
                <button type="submit"  class="btn btn-primary btn-block mb-4">
                  Sign up
                  
                </button>
                <Link to="/login">
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account? <a href="#!">Sign in</a>
                </p>
              </Link>

               
                <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                  <AiFillFacebook/>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                   <AiOutlineTwitter/>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                  <AiOutlineInstagram/>
                  </button>

                  <button type="button" class=" btn btn-link btn-floating mx-1">
                  <BiLogoGmail/>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Formik>
  
</Fragment>

      
    </>
  )
}

export default Signup
