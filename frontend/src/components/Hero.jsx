
import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/hero-img.svg";


function Hero() {
  return (
    <div className="flex text-hero-txt bg-white py-14 drop-shadow-sm z-0 h-full w-full ">
      <div className="w-[55%] mt-20 ml-32 pt-1 pl-2 ">
        <h1 className="text-5xl font-bold tracking-wide">Discover the World of Books</h1>
        <h3 className="py-8 text-4xl">Your Source for Better Learning</h3>
        <p className="text-lg w-[80%] pb-6 pl-2 tracking-widest">We are a publishing company that publishes books, Modules and workbooks. We also have affiliate companies including Merryland Publishing Corporation, Jedigar Enterprises and B2G2 Enterprises</p>
        <NavLink to="/books" >
        <button className="bg-primary-txt hover:scale-105 ease-in duration-100 text-white font-bold py-3 px-14 rounded-md shadow-md ">Explore Collection</button>
        </NavLink>
      </div>
      <div className="w-[45%]">
        <div className="rounded-tl-[47%] rounded-tr-[0%] rounded-br-[0%] rounded-bl-[10%] / rounded-tr-[0%] rounded-br-[0%] rounded-bl-[10%] rounded-tl-[10%] overflow-hidden">
        <img  src= {heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
}
export default Hero;