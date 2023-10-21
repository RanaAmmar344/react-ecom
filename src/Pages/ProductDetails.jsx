import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
import Footer from '../Components/Footer';
import MyContext from '../Context/Context';

const ProductDetails = () => {
  const {userLogin,setUserLogin}= useContext(MyContext ) ;
  const navigate = useNavigate()

  
  const handleButtonClick = () => {
   if (userLogin){
     navigate('/cart')
   }else{
     
     navigate('/login')
   }
 };





  const[data, setData] = useState([]);
  const [quantity, setQuantity]=useState(1)


const counterplus = ()=>{

setQuantity( quantity + 1)

}
const counterminus =()=>{

  if (quantity > 1){
    setQuantity(quantity -1);
  } 

}


 const param = useParams();
 const id = param.id;
 console.log(param.id)
 useEffect(()=>{

  async function fetchData(){

    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      
      setData(response.data);
      console.log(data)
      
    } catch (error) {
      console.log('not data ')
    }


  }
  fetchData();

 },[id ])



  return (
    <>
      <main class="cd__main">
 <Link to='/products'> <BsFillArrowLeftSquareFill class='back'/></Link> 
   <div class="container my-5">
  <div class="row">
  <div class="col-md-5 ">
  <div class="main-img  ">
  <img class="img mainimg  "      width={300} src={data.image} alt="ProductS"/>
  <div class="row my-3 previews">
  <div class="col-md-3 bgcard">
  <img class="w-100 " src={data.image} alt="Sale"/>
  </div>
  <div class="col-md-3 bgcard">
  <img class="w-100 " src={data.image} alt="Sale"/>
  </div>
  <div class="col-md-3 bgcard">
  <img class="w-100" src={data.image} alt="Sale"/>
  </div>
  <div class="col-md-3 bgcard">
  <img class="w-100" src={data.image} alt="Sale"/>
  </div>
  </div>
  </div>
  </div>
  <div class="col-md-7">
  <div class="main-description px-2">
  <div class="category text-bold d-flex pt-4">
  <h3>Category:</h3> <h5 class=' mx-4 mt-1'>{data.category}</h5>
  </div>
  <div class="product-title text-bold my-3">
  <h2>{data.title}</h2> 
  </div>
  <div class="price-area my-4">
  <p class="old-price mb-1"><del>$100</del> <span class="old-price-discount text-danger">(20% off)</span></p>
  <p class="new-price text-bold mb-1"><h4>${data.price}</h4></p>
  <p class="text-secondary mb-1">(Additional tax may apply on checkout)</p>
  </div>
  <div class="buttons d-flex my-5">
  <div class="block">
  <a href="#" class="shadow btn custom-btn bg-red-600 mx-2">Wishlist</a>
  </div>
  <div class="block">
 <Link to ='/cart'>  <button onClick={handleButtonClick} class="shadow btn btn-danger" fdprocessedid="hwsubz">Add to cart</button></Link>
  </div>
  
  </div>
  <div class=" custom-btn " role="group" aria-label=" button group">
  <button onClick={ counterminus} type="button" class="btn btn-outline-dark "><AiOutlineMinus/></button>
  <button type="button" class="btn btn-outline-dark m-2 px-4">{quantity}</button>
  <button   onClick={counterplus} type="button" class="btn btn-outline-dark"><AiOutlinePlus/></button>
</div>

 
  </div>
  <div class="product-details my-4">
  <h3 class="details-title text-color mb-1">Product Details</h3>
  <p class="description">{data.description} </p>
  </div>
  <div class="row questions bg-light p-3">
  <div class="col-md-1 icon">
  <svg class="svg-inline--fa fa-rocketchat questions-icon" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="rocketchat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path></svg> <i class="fa-brands fa-rocketchat questions-icon"></i> 
  </div>
  <div class="col-md-11 text">
  Have a question about our products at E-Store? Feel free to contact our representatives via live chat or email.
  </div>
  </div>
  <div class="delivery my-4">
  <p class="font-weight-bold mb-0"><span><svg class="  truck mb-2 " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"></path></svg> <i class="fa-solid fa-truck"></i> </span> <b>Delivery done in 3 days from date of purchase</b> </p>
  <p class="text-secondary">Order now to get this product delivery</p>
  </div>
  <div class="delivery-options my-4">
  <p class="font-weight-bold mb-0"><span><svg class=" delivry-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"></path></svg> <i class="fa-solid fa-filter"></i> </span> <b>Delivery options</b> </p>
  <p class="text-secondary">View delivery options here</p>
  </div>
  </div>
  </div>
  </div>

</main>
<div>

<Footer/>
</div>
    </>
  )
}

export default ProductDetails
