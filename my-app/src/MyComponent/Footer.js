import React from "react";
import '../index.css';
import Footer_logo from '../images2/littlebookLogo_2.png';
import Youtube_icon from '../images2/youtube-icon.png';
import Insta_icon from '../images2/insta-icon.png';
import Fb_icon from '../images2/fb-icon.png';
export default function Header() {
  return (
    <>
    <div className="footer">
        <div className="col-xl-12">
       <div className="row m-0">
          <div className="col-xl-6">
              <img className="my-5 mx-5" src={Footer_logo}/> 
              <input className="subscribe-input mx-4" type="text" placeholder="subscribe for input"/>
              <button className="subscribe-btn">SUBSCRIBE</button>
              <div className="row m-0 my-5 mx-5">
                <div className="col-xl-6">
                     <p className="footer-heading">Information</p>
                     <p className="footer-text">Ebook</p>
                     <p className="footer-text">Author and Publisher Contract</p>
                     <p className="footer-text">FAQs</p>
                     <p className="footer-text">Download iOS App</p>
                     <p className="footer-text">Download Android App</p>
                </div>
                <div className="col-xl-6">
                    <p className="footer-heading">Company</p>
                    <p className="footer-text">Terms of Service</p>
                    <p className="footer-text">Privacy Policy</p>
                    <p className="footer-text">Support</p>
                    </div>
                    <img className="youtube-icon" src={Youtube_icon}/>
                    <img className="insta-icon" src={Insta_icon}/>
                    <img className="fb-icon" src={Fb_icon}/>
              </div>
          </div>
          <div className="col-xl-6">
             <p className="contact-us-text my-5 mx-5 mb-3">CONTACT US</p>
             <p className="contact-us-para mx-5">For the customer support and feedback <br/>contact us via contact form 24/7.</p>
             <input className="footer-email-input mx-3 my-3" type="text" placeholder="Email"/>
             <input className="footer-email-input mx-3 my-3" type="text" placeholder="Subject"/>
             <textarea className="footer-msg-input mx-3 my-3" name="Message" placeholder="Message"></textarea>
             <button className="footer-send-btn">Send</button>
          </div>
          </div>
          <div className="last-text mb-4">
            <p>2020 The Little Book Company All rights reserved.</p>
          </div>
       </div>
    </div>
    </>
  );
}