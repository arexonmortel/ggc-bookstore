
import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/ggc_picture.png";
import KidsStudying from "../assets/kids-studying.jpg";
import kidsClassroom from "../assets/kids-classroom.jpg";
import { useSpring, animated } from '@react-spring/web'


function Hero() {
  const heroAnimate = useSpring({
    from: { x: -200, opacity:0 },
    to: { x: 0, opacity:1},
    config: { duration: 700 }
  })
  const heroImageAnimate = useSpring({
    from: { x: 200, opacity:0 },
    to: { x: 0, opacity:1},
    config: { duration: 700 }
  })
  const buttonAnimate = useSpring({
    from: { y: -30, opacity:0 },
    to: { y: 0, opacity:1},
    config: { duration: 700 },
    delay: 1900
  })


  return (
    <div className="flex text-hero-txt bg-white py-14 drop-shadow-sm z-0 h-full w-full ">
      <animated.div style={{...heroAnimate}} className="w-[55%] mt-20 ml-32 pt-1 pl-2 ">
        <h1 className="text-5xl font-bold tracking-wide">Discover the World of Books</h1>
        <h3 className="py-8 text-4xl">Your Source for Better Learning</h3>
        <p className="text-lg w-[80%] pb-6 pl-2 tracking-widest">We are a publishing company that publishes books, Modules and workbooks. We also have affiliate companies including Merryland Publishing Corporation, Jedigar Enterprises and B2G2 Enterprises</p>
        <NavLink to="/books" >
        <animated.div style={{...buttonAnimate}}>
        <button className="bg-primary-txt text-white font-bold py-3 px-14 rounded-md shadow-md hover:scale-110 hover:bg-opacity-80 transition-transform duration-300 ease-in-out">
          Explore Collection
        </button>
        </animated.div>
        </NavLink>
      </animated.div>
      <animated.div style={{...heroImageAnimate}}  className="w-[45%]">
        <div className="rounded-tl-[47%] rounded-tr-[0%] rounded-br-[0%] rounded-bl-[10%] / rounded-tr-[0%] rounded-br-[0%] rounded-bl-[10%] rounded-tl-[10%] overflow-hidden">
        <img  src= {heroImage} alt="hero image" />
      </div>
      </animated.div>
    </div>
  );
}
export default Hero;