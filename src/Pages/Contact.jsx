

import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import Footer from '../Components/Footer';



const Contact = () => {
  

  

  
  return (
    <>
      
<section class="mb-4">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4 about-heading">Contact us</h2>
    
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

       
        <div className="col-md-6 mb-md-0 mb-5 mx-4 ">
            <form   action="https://formspree.io/f/xbjvqbzw" method="POST">

              
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0  ">
                            <input type="name" placeholder='Your Name' id="name" name="name" class="form-control"/>
                            
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="email"  placeholder='Your Email'  id="email" name="email" class="form-control"/>
                            
                        </div>
                    </div>
                   

                </div>
                
            
            
                <div class="row">

                   
                    <div class="col-md-8">

                        <div class="md-form mt-4">
                            <textarea type="message" placeholder=' message' id="message" name="message" rows="3" cols='5' class="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
               

            <div class="text-start my-3">
                <button type='submit' class="btn btn-dark" >Send</button>
            </div>
            </form>

            <div class="status"></div>
        </div>
        
        <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
                <li> 
                  <ImLocation2 class='contact-icon'/>
                    <p>157-M, Madar-e-Millat Road, Quaid e
Azam Industrial <br/> Estate, Lahore, Punjab PK</p>
                </li>

                <li><BsFillTelephoneFill class='contact-icon-phone'/>
                    <p>+ 92 3041116062</p>
                </li>

                <li><MdEmail class='contact-icon-email'/>
                    <p>info@knowledge.tech</p>
                </li>
            </ul>
        </div>
        

    </div>

    
    <h1 class='map mainheading mb-4'>Google Map</h1>
    <div class='mb-4'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.9303030610904!2d74.31644127452095!3d31.443585650933652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907d378895edd%3A0x3b7c67462f2b2950!2sKnowledge%20Streams!5e0!3m2!1sen!2s!4v1697573474129!5m2!1sen!2s" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</section>
<Footer/>

    </>
  )
}

export default Contact
