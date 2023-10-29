import React, { useContext } from 'react'
import {Formik, Form, Field, ErrorMessage } from "formik"
import { Fragment } from 'react'
import * as yup from "yup"
import img from '../images/signup.png'
import { AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './FireBase-config'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const location = useLocation()
  const navigate =useNavigate();
  const loc = location.state ?.redirectedFrom.pathname;
  const defaultValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("Please enter your email").email("Please enter a valid email"),
    password: yup.string().required("Please enter your password"),
  });

  const handleSubmit = async (values) => {
    const { email, password } = values;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      alert('User Sign-in successfully!');
     
      return location ? navigate(loc) : navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Sign-in failed. Please try again.');
    }
  };
  

   const  mystyle={
        padding: "12px",
    }
  return (
    <Fragment>
    <Formik
      initialValues={defaultValue}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      
      class="vh-100 my-5"
    >
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src={img} width={400} class="" alt="Sample image" />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Form>
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <AiFillFacebook />
                </button>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <AiOutlineTwitter />
                </button>
                <button type="button" class="btn btn-primary btn-floating mx-1">
                  <AiOutlineInstagram />
                </button>
              </div>
              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <div class="form-outline mb-4">
                <Field type="email" name="email" id="email" class="form-control form-control-lg" placeholder="Enter a valid email address" />
                <ErrorMessage name="email" />
              </div>
              <div class="form-outline mb-3">
                <Field type="password" name="password" id="password" class="form-control form-control-lg" placeholder="Enter password" />
                <ErrorMessage class='error' name="password" />
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <Field class="form-check-input me-2" type="checkbox" value="" id="rememberMe" name="rememberMe" />
                  <label class="form-check-label" for="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password" class="text-body">Forgot password?</Link>
              </div>
              <div class="text-center text-lg-start mt-4 pt-2">
                <button   type="submit" class="btn btn-primary btn-lg" style={mystyle} >Login</button>
               
                <Link to='/signup'>
                  <p   class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a   href="#!" class="link-danger mx-3">Register</a></p>
                </Link>
                
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
    <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved Rana Ammar.
      </div>
      
    </div>
  </Fragment>

  )
}

export default LoginPage
