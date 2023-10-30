import React from 'react'
import img1 from "../images/logofooter2.png"
import { AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';

const Footer = () => {
  return (
    <>
    <footer class="py-5 custom-footer px-4  mt-5">
    <div class="row  ">

    <div class="col-md-4 offset-md-1 mb-3 mx-3">
      <img src={img1} alt="Bootstrap "  class="change-color mb-2"  width="150" height="30"/>
      <p class='footer-text'> Suspendisse quis sodales nunc. Sed ligula enim, mattis ut sem id, mollis sagittis sapien.</p>
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" fdprocessedid="cvjiek"/>
            <button class="btn btn-primary" type="button" fdprocessedid="7fj1yf">Subscribe</button>
          </div>
        </form>
      </div>
      <div class="col-6 col-md-2 mb-3 mx-4 ">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

     
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved by Rana Ammar.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><AiFillFacebook className='footer-icon'/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><AiOutlineTwitter className='footer-icon'/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><AiOutlineInstagram className='footer-icon'/></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><BiLogoGmail className='footer-icon'/></svg></a></li>
      </ul>
    </div>
  </footer>
      
    </>
  )
}

export default Footer
