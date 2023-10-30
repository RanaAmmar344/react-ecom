

import { Link } from 'react-router-dom'
import {MdDeleteForever} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeToCart } from '../store/actions/cartActions';

const AddCart = () => {
   
  
 

const cart = useSelector((state) => state.cart);

const dispatch = useDispatch();


const handleRemoveFromCart = (productId) => {
  dispatch(removeToCart(productId));
};


console.log('cart',cart);

const calculateTotalPrice = () => {
  let totalPrice = 0;

  cart.cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return totalPrice;
};

    


  
 
  return (
  <>
  
 <section class="h-100 cart-color" >
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          
        </div>
       
        {cart?.cart.length === 0 ?  (
        
         <h1 class=' m-5 text-danger'> "Your Cart is empty add  Products"</h1>

      ) : (
        <ul>
        {cart?.cart.map((item) => {

       return <div class="card rounded-3 mb-4"  key={item.id}>
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={item.image}
                  class="img-fluid rounded-3" alt="Cotton T-shirt"/>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">{item.title.slice(0,30)}</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button key={item.id}  class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>
                
                {/* <input  id="form1" min="0" name="quantity" value="2" type="number"
                  class="form-control form-control-sm" />  */}
                  {item.quantity}

                <button class="btn btn-link px-2"
                  >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">${item.price}</h5>
              </div>
              <div  class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a onClick={() => handleRemoveFromCart(item.id)} href="#!" class="text-danger"><MdDeleteForever class='icon'/></a>
              </div>
            </div>
          </div>
        </div>
       
        })}
          </ul>
      )}
      
        <div class="card ">
          <div class="card-body ">
         <Link to='/checkout'>   <button type="button" class="btn btn-warning btn-block btn-lg ">Proceed to Pay</button></Link>
          <h1 class='total'>Total Price: <span className='text-danger'>${calculateTotalPrice()}</span> </h1>
          </div>
        
        </div>
       
 
      </div>
    </div>
  </div>
</section>


      


  
  </>
  )
}

export default AddCart



