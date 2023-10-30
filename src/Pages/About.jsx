import React from 'react'
import img from '../images/aboutcover.jpg'
import { BsTrophy } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';
import {PiShirtFoldedThin } from 'react-icons/pi';
import {RiLightbulbFlashLine } from 'react-icons/ri';
import {GiStarFormation } from 'react-icons/gi';
import {BiLeaf } from 'react-icons/bi';
import {TbTruckDelivery} from 'react-icons/tb';
import {AiOutlineShopping} from 'react-icons/ai';
import {MdOutlineGppGood} from 'react-icons/md';
import { Link  } from 'react-router-dom';
import Footer from "../Components/Footer";

const About = () => {
  
  return (
  
   <>
   <section class='about-body'>
    <div class='about-heading'> About Crescendo</div>
   <div class='row  aboutmain'data-aos="fade-up-right" >
    <div class="col-md-6 ">
   <img  class='about-cover' src={img}  height={500} width={600} />
    </div>
    
      <div class="col-md-5 about-cover-2">
        <h1> Our Store </h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repellat id aut, esse repellendus non ex quos nulla quae blanditiis nostrum molestiae ut similique ea. Mollitia in placeat debitis exercitationem corrupti ipsam, quisquam maxime magnam accusamus alias, porro asperiores.</h5>
      </div>
   </div>
   {/* year of experience */}
   <div class="row m-5   exp-bg" data-aos="fade-up">
    <div class="col-md-2">
      <h1 class='exp-title'>20+</h1>
      <p>Years of Experience</p>
    </div>
    <div class="col-md-2">
      <h1 class='exp-title'>100+</h1>
      <p>Audio Products</p>
    </div>
    <div class="col-md-2">
      <h1 class='exp-title'>10+</h1>
      <p>Industry Awards</p>
    </div>
    <div class="col-md-2">
      <h1 class='exp-title'>100K+</h1>
      <p>Community Members</p>
    </div>
   </div>
   {/* our Value */}
<div class=' value  ' >

   <h1 class='about-value'>Our Values</h1>
  <Link to='/products'>  <button type="button" class="btn btn-primary">View Our Products</button></Link>
</div>
   <div className=" value-card-row mx-5 mb-5 " data-aos="zoom-out-left">
    <div className=" text-start p-5 value-card ">
      <div class='card-icon'><BsTrophy/></div> 
      <h4>Quality</h4>
      <p class='value-card-p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officia modi. Eum quos modi aliquid.</p>
    </div>
    <div className=" text-start p-5 value-card ">
      <div class='card-icon'><FiThumbsUp/></div> 
      <h4>Customer Satisfaction</h4>
      <p class='value-card-p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officia modi. Eum quos modi aliquid.</p>
    </div>
    <div className=" text-start p-5 value-card ">
      <div class='card-icon'><PiShirtFoldedThin/></div> 
      <h4>Passion for Dressing</h4>
      <p class='value-card-p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officia modi. Eum quos modi aliquid.</p>
    </div>
    <div className=" text-start p-5 value-card ">
      <div class='card-icon'><RiLightbulbFlashLine/></div> 
      <h4>Innovation</h4>
      <p class='value-card-p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officia modi. Eum quos modi aliquid.</p>
    </div>
    <div className=" text-start p-5 value-card ">
      <div class='card-icon'><GiStarFormation/></div> 
      <h4>Design Excellence</h4>
      <p class='value-card-p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officia modi. Eum quos modi aliquid.</p>
    </div>
    <div className=" text-start p-5 value-card ">
      <di class='card-icon'><BiLeaf/></di> 
      <h4>Sustainability</h4>
      <p class='value-card-p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officia modi. Eum quos modi aliquid.</p>
    </div>
   </div>
   <div className="container-exp" data-aos="fade-up">

   
    <h1 class='title-exp p-5'>Experience Streamlined Shopping with Crescendo</h1>
   <div className=" about-exp-grid">
    <div className="text-center p-5 ">
      <h1><TbTruckDelivery/></h1>
      <h4>Free Delivery</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere obcaecati cupiditate, voluptatum exercitationem temporibus natus! Optio facilis exercitationem voluptates.</p>

    </div>
    <div className="text-center p-5 ">
      <h1> <AiOutlineShopping/></h1>
      <h4>Self Pickup</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere obcaecati cupiditate, voluptatum exercitationem temporibus natus! Optio facilis exercitationem voluptates.</p>

    </div>
    <div className="text-center p-5 ">
      <h1><MdOutlineGppGood/></h1>
      <h4>Warranty</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere obcaecati cupiditate, voluptatum exercitationem temporibus natus! Optio facilis exercitationem voluptates.</p>

    </div>
   </div>
   <div class='about-btn'>

    <Link to='/products'> <button type="button" class="btn btn-primary   ">Shop Now</button></Link>
   </div>
   </div>
   <Footer/>
   </section>
   
   </>
  )
}

export default About
