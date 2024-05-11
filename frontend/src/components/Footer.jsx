import React from 'react';
import {NavLink} from 'react-router-dom';
import ggcLogo from '../assets/ggc-logo.png';
import { FaXTwitter, FaInstagram, FaFacebookF} from "react-icons/fa6";
import  Key  from '../config/ApiKey';


function Footer() {

    const currentYear = new Date().getFullYear();
    
    const handleClickTop= () =>{
      window.scrollTo(0, 0);  
      console.log('clicked')
     }

    return (
        <footer className="flex flex-col bg-footer-bg bg-opacity-80 py-8 mt-auto">
        <div className='pl-32 flex flex-row text-white text-opacity-75'>
        <div className='flex flex-col gap-4 w-[50%]'> 
            <div className='flex items-center h-40 '>
            <img className='w-52 -ml-10 opacity-70' src= {ggcLogo} alt="ggc logo" />
            <h1 className=' font-bold text-3xl -ml-8 tracking-wider'>GGC Bookstore</h1>
            </div>
            <p className=' w-[85%] -mt-3  tracking-wider text-md'>Dive into enchanting worlds with our curated collection of captivating books. Elevate your reading experience—explore, discover, and escape through the pages.</p>
            <div className='flex items-center mt-2 gap-4'>
                <p className='text-xl font-semibold'>Follow Us</p>
                <div className='flex gap-2'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='text-2xl text-blue-500 cursor-pointer'/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className='text-2xl text-black-500 cursor-pointer'/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='text-2xl bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded-md cursor-pointer'/>
            </a>
          </div>
            </div>
        </div>
        <div className='flex items-center justify-between  w-[50%]'>
            <div className='w-[50%]'>
                <h1 className='font-semibold text-xl py-8'>Quick Links</h1>
                <ul className='flex flex-col gap-2 text-md'>
                    <li className='cursor-pointer hover:underline underline-offset-1' onClick={handleClickTop}><NavLink to='/'>Home</NavLink></li>
                    <li className='cursor-pointer hover:underline underline-offset-1' onClick={handleClickTop}><NavLink to='/aboutggc'>About</NavLink></li>
                    <li className='cursor-pointer hover:underline underline-offset-1' onClick={handleClickTop}><NavLink to='/books'>Explore Books</NavLink></li>
                    <li className='cursor-pointer hover:underline underline-offset-1' onClick={handleClickTop}><NavLink to='/contact'>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className='w-full p-5'>
                <h1 className='py-3 font-bold'>Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3251688973864!2d121.01861426083818!3d14.5805380775084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c84c009de5ff%3A0x4149353da0e4f4e5!2sMerryland%20Publishing%20Inc.!5e0!3m2!1sen!2sph!4v1713351926231!5m2!1sen!2sph" 
            className='w-full h-60 border-0 rounded-md '
            allowFullScreen="" 
            loading="lazy" >
            </iframe>
            <p className='text-md font-semibold pt-2'>#51 Merryland Village, 375 J. Rizal St. Barangay Namayan, Mandaluyong City</p>
            <p className='font-light'>Metro Manila, Philippines</p>
            </div>
        </div>
        </div>
        <p className="text-center font-extralight text-sm text-gray-400">© 2024 Garcia Group of Company. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;