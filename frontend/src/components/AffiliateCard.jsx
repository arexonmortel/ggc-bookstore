
import React from 'react';
import {NavLink } from 'react-router-dom';
import B2g2 from '../assets/b2g2-logo.png';
import MpcRed from '../assets/mpc-red.png';
import Jedigar from '../assets/jedigar.png';
import { MdMenuBook } from "react-icons/md";
function Affiliate() {
      // Array of image paths
  const affiliates = [{
    image: B2g2,
    name: 'B2G2 Enterprises',
    bookCopies: '37',
    route: 'b2g2'
  },
  {
    image: MpcRed,
    name: 'Merryland Publishing Corporation',
    bookCopies: '37',
    route: 'merryland'
  },
  {
    image: Jedigar,
    name: 'Jedigar Enterprises',
    bookCopies: '19',
    route: 'jedigar'
  
  }];

  return (
    <div className='w-full h-full pb-32 drop-shadow-lg '  >
      <h1 className="text-primary-txt text-3xl font-bold font-primary mt-20 ml-14 p-3">Affiliates</h1>
      <div className="grid grid-cols-3 gap-4 p-12 pt-6">
      {/* Map over the affiliates array and display each image */}
      {affiliates.map((affiliate, index) => (
        <NavLink to= {`/about/${affiliate.route}`} 
        key={index}  
        className=' drop-shadow-md bg-white rounded-3xl overflow-hidden p-5 cursor-pointer transition-transform duration-500 transform hover:-translate-y-10 '
        onClick={()=> window.scrollTo(0, 0)}>
            <div className='bg-[#f0f0f0] flex h-[90%] flex-col items-center justify-center rounded-2xl '>
            <img  src={affiliate.image} alt={`Image ${index + 1}`} className="w-[70%] h-[70%] " />
            </div>
            <div className='flex justify-between items-center p-2 pt-6 w-full'>
            <p className='font-semibold text-primary-txt text-lg'>{affiliate.name}</p>
            <div className='flex justify-start items-center gap-x-2'>
              <MdMenuBook className='text-primary-txt text-2xl' />
              <p className='font-medium text-primary-txt text-lg'>{affiliate.bookCopies}</p>
             </div>
            </div>
        </NavLink>
      ))}
    </div>
    </div>
  );
}

export default Affiliate;