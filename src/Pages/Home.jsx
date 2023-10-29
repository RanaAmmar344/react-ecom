import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img7 from '../images/girlshoping.png';
import img4 from '../images/clothing.jpg';
import img5 from '../images/ring.jpg';
import img6 from '../images/tv.jpg';
import { Link } from 'react-router-dom';
import {TbTruckDelivery} from 'react-icons/tb';
import {AiOutlineShopping} from 'react-icons/ai';
import {MdOutlineGppGood} from 'react-icons/md';
import {BiSolidRightArrow} from 'react-icons/bi';
import {FcShop} from 'react-icons/fc';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import Footer from "../Components/Footer";


import img1 from '../images/cloth2.png'
import img2 from '../images/happy.png'
const Home = () => {
  const myStyle = {
    width: '19rem',
  };
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        // const featured = data.filter((product) => product.featured).slice(0, 4);
        setFeaturedProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <section class="home-section " >
        <div class="home-container m-5 " data-aos="slide-left" >
          <div class="row home-item " >
            <div class="col-md-8">
              <h1 class="home-heading">Elevate Your Shoping Journey</h1>
              <h4 class="text-white mb-3">Experience Shopping in Its Purest Form</h4>
              <Link to="/products">
                <button type="button" class="btn btn-dark">
                  Shop Now
                </button>
              </Link>
              <button type="button" class="btn text-white">Learn More</button>
            </div>
            
            <div class="col-md-4   ">
              <img class="home-img" width={400} src={img7} alt="Shopping Girl" />
            </div>
           
            
          </div>
        </div>

        <h1 class="feature-heading">Featured Products</h1>
<div class="feature-container">



<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-5 mt-5" data-aos="fade-up">
        <div class="col">
          <div class="card shadow-sm">
            <img src={img4} width={200} class='m-auto p-3'/>
            <div class="card-body">
              <h2 class="card-text text-center"> Clothing </h2>
              <div class=" text-center">
                <div class="btn-group">
                  <h5 class='rate-f'>Rate Start From 10 $</h5>
                </div>
              </div>
               <Link to='/products'> <button type="button" class="btn btn-outline-warning f-btn " >View Products</button></Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={img5} width={220} class='m-auto p-3'/>
            <div class="card-body">
              <h2 class="card-text text-center"> jewelary</h2>
              <div class=" text-center">
                <div class="btn-group">
                  <h5 class='rate-f' >Rate Start From 20 $</h5>
                </div>
              </div>
              <Link to='/products'> <button type="button" class="btn btn-outline-warning f-btn " >View Products</button></Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={img6} width={300} height={255} class='m-auto p-3'/>
            <div class="card-body">
              <h2 class="card-text text-center"> Electronic  </h2>
              <div class=" text-center">
                <div class="btn-group">
                  <h5 class='rate-f'>Rate Start From 50 $</h5>
                </div>
              </div>
              <Link to='/products'> <button type="button" class="btn btn-outline-warning f-btn " >View Products</button></Link>
            </div>
          </div>
        </div>
        
       

    
        
       
        
      </div>
        </div>

        <div class="container-exp  " data-aos="fade-up">

   
<h1 class='title-exp p-5'>Experience Streamlined Shopping with Crescendo</h1>
<div class=" about-exp-grid   ">
<div class="text-center p-5 ">
  <h1><TbTruckDelivery/></h1>
  <h4>Free Delivery</h4>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere obcaecati cupiditate, voluptatum exercitationem temporibus natus! Optio facilis exercitationem voluptates.</p>

</div>
<div class="text-center p-5 ">
  <h1> <AiOutlineShopping/></h1>
  <h4>Self Pickup</h4>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere obcaecati cupiditate, voluptatum exercitationem temporibus natus! Optio facilis exercitationem voluptates.</p>

</div>
<div class="text-center p-5 ">
  <h1><MdOutlineGppGood/></h1>
  <h4>Warranty</h4>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere obcaecati cupiditate, voluptatum exercitationem temporibus natus! Optio facilis exercitationem voluptates.</p>

</div>
</div>
<div class='about-btn'>

<Link to='/products'> <button type="button" class="btn btn-primary   ">Shop Now</button></Link>
</div>
</div>

{/* way Crescendo */}

<h1 class='title-exp p-5'>Why Crescendo?</h1>

<div class="row why-main p-5 " data-aos="zoom-out">
  <div class="col-md-4 ">
    
  <h3 ><BiSolidRightArrow class='item-why' fontSize={20}/>Exceptional Sound Quality</h3>
    <h5 class='px-4  why-p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius commodo aliquam.</h5>
<br/>
<h3><BiSolidRightArrow class='item-why' fontSize={20}/>Versatile and User-Friendly</h3>
<h5 class='px-4 why-p'>Maecenas eu dui dictum, imperdiet metus et, dapibus nisl. Integer sit amet augue magna.</h5>
  </div>
  <div class="col-md-4 ">
<img src={img1} class='img-why' width={200} />
  </div>
  <div class="col-md-4">
    <h3><BiSolidRightArrow class='item-why' fontSize={20}/>Innovative Design</h3>
    <h5 class='px-4 why-p'>Mauris laoreet congue ipsum at ultricies. Phasellus mattis dictum neque, vel sagittis odio pellentesque at.</h5>
  <br/>
  <h3><BiSolidRightArrow class='item-why' fontSize={20}/>Superior Build and Durability</h3>
  <h5 class='px-4 why-p'>Aliquam vel augue sed justo sagittis lobortis. Vestibulum porttitor sit amet magna id elementum.</h5>
  </div>
</div>


{/* join our list to day */}

<div className="row join d-flex flex-row flex-wrap mt-5  mx-5" data-aos="flip-down" >
  <div className="col-md-5 happay">
    <img src={img2} className='join-img' width={450} height={500} />

  </div>
  <div className="col-md-6 join2 p-5 ">
    <h1>Join Our List Today!</h1>
    <h4>Be the first to know</h4>
    <br/>
    <div className="row  ">
      <div className="col-md-6">
      <h5><AiOutlineCheckCircle className='happy-icon'/>Limited edition products</h5>
      <h5><AiOutlineCheckCircle className='happy-icon'/>Special offers</h5>
      </div>
      
      <div className="col-md-6">
      <h5><AiOutlineCheckCircle className='happy-icon'/>Exclusive contents</h5>
      <h5><AiOutlineCheckCircle className='happy-icon'/>No spams!</h5>
      </div>
      
      
    </div>
    <form action="" class=' col-md-4 mt-3' >
      <input placeholder='Email' class='join-input' type='text'>
      </input>
      <button type="submit" class="btn btn-primary p-3 mt-4">Subscribe</button>
    </form>
  </div>
</div>

<div class="px-4 py-5 my-5 text-center" data-aos="zoom-out">
<FcShop className='blog'/>
    <h1 class="display-5 fw-bold text-body-emphasis">Crescendo</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with , the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to='/products'><button type="button" class="btn btn-primary btn-lg px-4 gap-3" fdprocessedid="cru6r">Shop Now</button></Link> 
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="1tvfdu">Learn More</button>
      </div>
    </div>
  </div>
  <Footer/>

        
      </section>
    </>
  );
};

export default Home;
