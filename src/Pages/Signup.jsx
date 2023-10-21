import React from 'react'

import {Formik, Form, Field, ErrorMessage } from "formik"
import { Fragment } from 'react'
import * as yup from "yup"
import { AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Signup = () => {
  <ErrorMessage name="email" style={{ color: 'red' }} />

  const defaultValue={
    name:'',
    lastname:'',
    email:'',
    number:'',
    password:'',
    repassword:''
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter First Name"),
    lastname: yup.string().required("Please enter your Last Name"),
    email: yup.string().required("Please enter your email").email("Please enter a valid email"),
    password: yup.string().required("Please enter your password"),
    repassword: yup.string().required("Please enter Re-password"),

  });
   
const handleSubmit = (values) => {
  console.log("values", values)
  
}
  return (
    <>
   
<Fragment class="">
  <Formik
     initialValues={defaultValue}
     validationSchema={validationSchema}
     onSubmit={handleSubmit}       
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
                <div class="form-outline mb-4">
                  <Field type="repassword" name='repassword' placeholder='Re-Password' id="form3Example4" class="form-control" />
                  <ErrorMessage name="repassword" />
                </div>

                
                <div class="form-check d-flex justify-content-center mb-4">
                  <Field class="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

               
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
