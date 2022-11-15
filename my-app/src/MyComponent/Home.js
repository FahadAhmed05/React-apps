import React from 'react'
import '../Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Slider_1 from '../images2/slider1.svg';
import Slider_2 from '../images2/slider2.jpg';
import Slider_3 from '../images2/Slider3.svg';
import Slider_4 from '../images2/Slider4.svg';
import Star from '../images2/star.svg';
import manzilaNaqviBook from '../images2/manzilaNaqvi.jpg';
import wahi_hm_bhi_thay from '../images2/wahi hm bhi thay.jpg';
import kahani from '../images2/kahani.jpg';
import stay_with_me from '../images2/stay.jpg';
function App() {
  return (
    <>
    <div className='container-fluid'>
    <div className='row m-0'>
        <div className='col-xl-8'>
    <Carousel>
  <Carousel.Item>
    <img
      className="w-100" src={Slider_1} alt="First slide"/>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="w-100" src={Slider_2} alt="Second slide"/>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Slider_3} alt="Third slide"/>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="w-100" src={Slider_4} alt="Fourth slide"/>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
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
    <div className='container-fluid-2'>
       <div className='row m-0 mt-5'>
         <div className='col-xl-3'>
            <p className='heading-text'>Search Filter</p>
            <p className='para-text'>Search by your preference</p>
            <p className='heading-text mt-4'>Categories</p>
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>All Categories</label> <br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Little Book Special</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Stories Work Collective</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>eBooks</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Magazine</label><br />
            <p className='heading-text mt-4'>Type</p>
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Novel</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Autobiography</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Politics</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Khakay</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Safarnama</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>English</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Children's Book</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Tanqeed</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Cooking</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Non-Fiction</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Others</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Current Affairs</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Poetry</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Afsanay</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Urdu Adab</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Fiction</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Tanz-O-Mazah</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>History</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Short Stories</label><br />
            <p className='heading-text mt-4'>Sort By</p>
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Author</label><br />
            <input className='input-checkbox' type="checkbox" />
            <label className='check-text mx-3 my-2'>Publisher</label><br />
         </div>
         <div className='col-xl-9'>
             <div className='row m-0'>
             <div className='col-xl-4'>
          <div className='book-shadow text-center'>
          <img className='naqvi-book' src={manzilaNaqviBook}/>
          <p className='on-text'>On Air</p>
          <p className='author-name'>by Maniza Naqvi</p>
          <p className='price'>Price :200 .00 RS</p>
          <img src={Star}/>
          <label className='mx-2 star-text'>4.6</label> <br />
          <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
          </div>
          <div className='col-xl-4'>
          <div className='book-shadow text-center'>
          <img className='naqvi-book' src={kahani}/>
          <p className='on-text'>Kahani Aur Llosa Say Muamala</p>
          <p className='author-name'>by Maniza Naqvi</p>
          <p className='price'>Price :200 .00 RS</p>
          <img src={Star}/>
          <label className='mx-2 star-text'>4.6</label> <br />
          <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
          </div>
          <div className='col-xl-4'>
          <div className='book-shadow text-center'>
          <img className='naqvi-book' src={wahi_hm_bhi_thay}/>
          <p className='on-text'>Wahin Hum Bhi Thae</p>
          <p className='author-name'>by Maniza Naqvi</p>
          <p className='price'>Price :100 .00 RS</p>
          <img src={Star}/>
          <label className='mx-2 star-text'>4.6</label> <br />
          <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
          </div>
          <div className='col-xl-4'>
          <div className='book-shadow text-center'>
          <img className='naqvi-book' src={stay_with_me}/>
          <p className='on-text'>Stay With me</p>
          <p className='author-name'>by Maniza Naqvi</p>
          <p className='price'>Price :200 .00 RS</p>
          <img src={Star}/>
          <label className='mx-2 star-text'>4.6</label> <br />
          <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
          </div>
          </div>
         </div>
       </div>
    </div>
</>
  );
}
export default App;