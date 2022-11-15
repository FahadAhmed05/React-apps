import React from 'react';
import Slider_2 from '../images2/slider2.jpg';
import Payment_icon from '../images2/payment.svg';
import Increase_icon from '../images2/increase.svg';
import Contract_icon from '../images2/contract.svg';
import Panel_icon from '../images2/panel.svg';
import Easy_Paisa from '../images2/easypaisa.svg';
import Bank_Transfer from '../images2/banktransfer.svg';
import Visa from '../images2/visa.svg';
import '../Stories_work_collective.css';
function Stories_work_collective() {
  return (
    <>
      <div className='container-fluid'>
         <div className='row m-0'>
           <div className='col-xl-7'>
            <img className='w-100 slider' src={Slider_2}/>
           </div>
           <div className='col-xl-1'></div>
           <div className='col-xl-4'>
        <div className='publisher-box'>
           <p className='are-u-text'>Are you an</p> 
           <p className='author-text'>Author or Publisher?</p>
           <p className='little-book-text'>Little Book Company ebook platform increases your sales worldwide.</p>
           <button className='reg-btn'>Register as a Seller</button>
           <p className='already-text'>Already have an Account?<span className='spain'> Login!</span></p>
    </div>
           </div>
         </div>
      </div>
      <div className='text-center mt-5'>
      <p className='story-writer-text poppins-semibold'>Dear Story Writers,</p>
      <p className='welcome-heading poppins-semibold'>Welcome to The Little Book Company!</p>
      <p className='poppins-light blieve-inself-text'>We believe in self help and collectives.</p>
      </div>
      <div className='container-fluid'>
      <div className='row text-center m-0 mt-5'>
          <div className='col-xl-3'>
            <img src={Payment_icon}/>
            <p className='poppins-medium pubhead my-4'>Cash Transfers for Stories</p>
            <p className='pubtext poppins-light'>Earn money from your story. We will make cash transfers to anyone
                 in need of earning income and livelihood support who is able to
                  submit a story they have written or recorded on audio or video
                   and can sell it on this platform. We will edit, market and
                    post their stories at The Little Book Company website.</p>
          </div>
          <div className='col-xl-3'>
      <img src={Increase_icon}/>
      <p className='poppins-medium pubhead my-4'>Earn with your Story</p>
            <p className='pubtext poppins-light'>We will set a minimal price 
            for our readers to purchase the story to read. Once the total 
            earnings from the story reach Rs.1000 we will make an e-paisa 
            transfer to the storyteller. Each storyteller will be able to 
            monitor the sales and payment transfers to them as a result of 
            their story</p>
</div>
<div className='col-xl-3'>
<img src={Contract_icon}/>
<p className='poppins-medium pubhead my-4'>Agreement Policies</p>
            <p className='pubtext poppins-light'>The author signs
             an online agreement with The Little Book Company (here)
              before books are published by us on this platform. The
               agreement enables the author to receive payments for 
               their book sales through payment transfers from the 
               Little Book Company to the Publisher.</p>
</div>
<div className='col-xl-3'>
<img src={Panel_icon}/>
<p className='poppins-medium pubhead my-4'>Dedicated Individual Storytellers
 Portal for Monitoring of Sales and Payments</p>
            <p className='pubtext poppins-light'>Authors on our platform 
            have access to their own individual account dashboard which
             allows them to monitor their book sales and the payment 
             transfers to them from The Little Book Company for their
              sales earnings.</p>
</div>
      </div>
      </div>
      <p className='Payment-Modes-text poppins-semibold text-center my-4'>Payment Modes Available!</p>
      <div className='available-container'>
        <div className='row m-0 text-center my-5'>
          <div className='col-xl-4'>
             <img src={Easy_Paisa}/>
          </div>
          <div className='col-xl-4'>
          <img src={Visa}/>
</div>
<div className='col-xl-4'>
<img src={Bank_Transfer}/>
</div>
        </div>
      </div>
    </>
  )
}
export default Stories_work_collective

