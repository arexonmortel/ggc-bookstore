// Navigation.js

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/ggc-logo.png'
import { IoPerson } from "react-icons/io5";




const Navigation = () => {
  const [isOpenAffiliate, setIsOpenAffiliate] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const ulRef = useRef(null);

  

const handleClickTop= () =>{
 window.scrollTo(0, 0);  
 console.log('clicked')
}

  const toggleAffiliate = () => {
    setIsOpenAffiliate(!isOpenAffiliate);
    setIsOpenAbout(false)
  };
  const toggleAbout = ()=>{
    setIsOpenAbout(!isOpenAbout)
    setIsOpenAffiliate(false)
  }
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    setIsOpenAffiliate(false);
    setIsOpenAbout(false)
  };

  // Function to toggle sticky state
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleClickOutside = (event) => {
    if (ulRef.current && !ulRef.current.contains(event.target)) {
      setIsOpenAbout(false);
      setIsOpenAffiliate(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav className={`bg-primary-bg p-4 font-primary drop-shadow-xl z-10 sticky top-0 w-full ${isSticky ? 'sticky top-0 ' : ''}`}>
      <div className="container mx-auto flex justify-between items-center ">

        {/* Logo */}
        <div className="flex items-center ">
          <NavLink to="/" className=" text-xl font-medium flex justify-center items-center" onClick={handleClickTop}>
            <img src={logo} alt="ggc-logo"  className='w-16'/> <p className='font-semibold text-primary-txt'> GGC Bookstore </p>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="w-1/2  hidden md:flex">
          <ul className="flex items-center w-full justify-around text-nowrap pl-14 px-5">
            <li className=" p-3 hover:underline underline-offset-4 decoration-[#9090a3]" onClick={handleClickTop}>
              <NavLink activeClassName = "active" to="/"
              className="text-primary-txt font-medium text-lg p-7 "
              onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li
      className="relative p-7 hover:underline underline-offset-4 decoration-[#9090a3] text-primary-txt font-medium text-lg focus:outline-none cursor-pointer"
      onClick={toggleAbout}
    >
        About
      {isOpenAbout && (
        <ul
          className="absolute mt-2 bg-white rounded-xl w-52 shadow-md ml-[-5rem] overflow-hidden z-50"
          ref={ulRef}
        >
          <li
            className="hover:bg-[#C5C5D4] p-3 text-nowrap"
            onClick={() => {
              setIsOpenAbout(false);
              handleClickTop();
            }}
          >
            <NavLink to="/about/merryland" activeClassName ="active" className="text-primary-txt font-light font-sm py-3">
              Merryland Corp.
            </NavLink>
          </li>
          <li
            className="hover:bg-[#C5C5D4] p-3"
            onClick={() => {
              setIsOpenAbout(false);
              handleClickTop();
            }}
          >
            <NavLink to="/about/jedigar" activeClassName ="sub-active" className="text-primary-txt font-light font-sm py-3">
              Jedigar Enterprises
            </NavLink>
          </li>
          <li
            className="hover:bg-[#C5C5D4] p-3"
            onClick={() => {
              setIsOpenAbout(false);
              handleClickTop();
            }}
          >
            <NavLink to="/about/b2g2" activeClassName ="sub-active" className="text-primary-txt font-light font-sm py-3">
              B2G2 Enterprises
            </NavLink>
          </li>
        </ul>
      )}
    </li>
            <li className="p-3 hover:underline underline-offset-4 decoration-[#9090a3]"
            onClick={()=> {handleClick; handleClickTop()}}>
              <NavLink activeClassName = "active" to="/books" className="text-primary-txt font-medium text-lg p-7">
                Books
              </NavLink>
            </li>
{/*             <li className="relative p-7 hover:underline underline-offset-4 decoration-[#9090a3] text-primary-txt font-medium text-lg focus:outline-none cursor-pointer" onClick={toggleAffiliate}>
      Affiliate
      {isOpenAffiliate && (
        <ul className="absolute mt-2 bg-white rounded-xl w-52 shadow-md ml-[-4rem] overflow-hidden transition duration-300 ease-in-out" ref={ulRef}>
          <li className="hover:bg-[#C5C5D4] p-3 text-nowrap" onClick={() => { setIsOpenAffiliate(false); handleClickTop(); }}>
            <NavLink to="/books" activeClassName="active" className="text-primary-txt font-light font-sm py-3">
              Merryland Publishing
            </NavLink>
          </li>
          <li className="hover:bg-[#C5C5D4] p-3" onClick={() => { setIsOpenAffiliate(false); handleClickTop(); }}>
            <NavLink to="/books" activeClassName="sub-active active" className="text-primary-txt font-light font-sm py-3">
              Jedigar Enterprises
            </NavLink>
          </li>
          <li className="hover:bg-[#C5C5D4] p-3" onClick={() => { setIsOpenAffiliate(false); handleClickTop(); }}>
            <NavLink to="/books" activeClassName="sub-active active" className="text-primary-txt font-light font-sm py-3">
              B2G2 Enterprises
            </NavLink>
          </li>
        </ul>
      )}
    </li> */}
            <li className="p-3 hover:underline underline-offset-4 decoration-[#9090a3]"
            onClick={()=> {handleClick; handleClickTop()}}>
              <NavLink activeClassName = "active" to="/contact" className="text-primary-txt font-medium text-lg p-7">
                Contact Us
              </NavLink>
            </li>
            <NavLink
                  to="/"
                  className="text-primary-txt font-medium text-lg"

                >
                  <IoPerson className="text-primary-txt font-medium text-xl" />
                </NavLink>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-primary-txt focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <palight
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isOpen && (
          <div className="md:hidden">
            <ul className="absolute top-16 right-0 bg-gray-800 p-4 rounded shadow-md">
              <li className="mb-4">
                <NavLink
                  to="/"
                  className="text-primary-txt font-medium text-lg"

                >
                  Home
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/books"
                  className="text-primary-txt font-medium text-lg"

                >
                  Books
                </NavLink>
              </li>
              <li className="relative">
                <button
                  className="text-primary-txt font-medium text-lg focus:outline-none"
                  onClick={toggleAffiliate}
                >
                  Affiliate
                </button>
                {isOpenAffiliate && (
                  <ul className="absolute mt-2 bg-gray-800 p-2 rounded">
                    <li className="mb-1">
                      <NavLink
                        to="/affiliate"
                        className="text-primary-txt font-medium text-lg"
                      >
                        Merryland Publishing
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        to="/affiliate"
                        className="text-primary-txt font-medium text-lg"
                      >
                        Jedigar Enterprises
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/affiliate"
                        className="text-primary-txt font-medium text-lg"
                      >
                        B2G2 Enterprises
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-primary-txt font-medium text-lg"

                >
                  Contact Us
                </NavLink>
              </li>
              <li>
              </li>
            </ul>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
