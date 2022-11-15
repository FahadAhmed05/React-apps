import React from 'react'
import SorryBanner from '../images2/sorryBanner.png';
import '../Sorry.css';
function Sorry() {
  return (
    <>
      <div className='text-center my-4 mx-4'>
         <img src={SorryBanner}/>
         <p className='sorry-heading poppins-bold mt-5'>Sorry</p>
         <p className='sorry-para poppins-bold'>This Page is Under development</p>
         <p className='available-text poppins-bold'>Will be available soon</p>
      </div>
    </>
  )
}
export default Sorry

