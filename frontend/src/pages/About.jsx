import React, {useState, useEffect}from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import heroAbout from '../assets/hero-about.png'
import Typewriter from 'typewriter-effect';
import { useSpring, animated } from '@react-spring/web'
import pupils from '../assets/filipino_reading_book.jpg'
import B2g2 from '../assets/b2g2-logo.png';
import MpcRed from '../assets/mpc-red.png';
import Jedigar from '../assets/jedigar.png';
import { NavLink } from "react-router-dom";
import ceo from '../assets/ceo-nobg.png'
import wave from '../assets/wave.svg'
import waveInverted from '../assets/wave_inverted.svg'
import owner1 from '../assets/owner1.jpg'
import owner2 from '../assets/owner2.jpg'
import Messenger from "../components/Messenger";



function About() {
  const [doneTyping, setDoneTyping] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const springs = useSpring({
    from: { y: 200, opacity:0 },
    to: { y: 0, opacity:1},
    config: { duration: 700 }
  })
  const animateHero = useSpring({
    from: { x: -200, opacity:0 },
    to: { x: 0, opacity:1},
    delay: 1500,
    config: { duration: 700 }
  })
  const animateMission = useSpring({
    from: { x: 200, opacity:0 },
    to: { x: 0, opacity:1},
    delay: 2000,
    config: { duration: 700 }
  })
    const animateCeo = useSpring({
    from: { x: 200, opacity:0 },
    to: { x: 0, opacity:1},
    delay: 3000,
    config: { duration: 700 }
  })
      const animateOwners = useSpring({
    from: { x: -200, opacity:0 },
    to: { x: 0, opacity:1},
    delay: 3000,
    config: { duration: 700 }
  })

       const animateFounders = useSpring({
    from: { y: -50, opacity:0 },
    to: { y: 0, opacity:1},
    delay: 4000,
    config: { duration: 700 }
  })

  const affiliates = [{
    image: B2g2,
    name: 'B2G2 Enterprises',
    route: 'merryland'
  },
  {
    image: MpcRed,
    name: 'Merryland Publishing Corporation',
    route: 'jedigar'
  },
  {
    image: Jedigar,
    name: 'Jedigar Enterprises',
    route: 'b2g2'
  
  }];


  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true); // Start the typewriter effect after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer to avoid memory leaks
  }, []);

  const handleTypingDone = () => {
    setDoneTyping(true);
  };
    return (
<div className="flex flex-col min-h-screen">
  <Navigation />
  <div className="flex-grow"> {/* This div expands to fill remaining vertical space */}
  <div className=" mx-auto relative overflow-hidden w-full">
  <div className="relative mb-5">
  <img src={heroAbout} alt="image" className="w-full opacity-100" />
  <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-primary-txt opacity-75 w-full h-full">

<div className="tracking-widest text-left">
{/* <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('GGC Bookstore')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
  options={{
    wrapperClassName: 'text-5xl font-bold text-white',
    autoStart: true,
    loop: true,
    cursorClassName: 'font-light text-5xl text-white'
  }}
/> */}
<animated.div style={{...springs}}>
  <h1 className="text-5xl font-bold text-white">GGC Bookstore</h1>
   </animated.div>
</div>
<div className="mt-12 w-[80%] h-40 text-left tracking-widest">
{startTyping && (
<Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Discover a diverse range of educational books tailored for students from elementary to secondary levels. Our curated collection offers engaging resources to inspire and empower learners at every stage of their academic journey.")
          .start();
      }}
      onTypingDone={handleTypingDone}
      options={{
        wrapperClassName: "text-white text-3xl font-light mt-12",
        delay: 35,
      }}
    /> 
    )}
</div>

  </div>
</div>
       {/* HEADER and MISSION SECTION */}
      <section className="text-left flex py-24 px-10">
      <div className="w-1/2">
      <animated.div style={{...animateHero}}>
        <div className="relative w-full h-96 overflow-hidden">
            <img src={pupils} alt="Image" className="absolute inset-0 w-full h-full object-cover"  style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }}/>
        </div>
      </animated.div>
          </div>
        <div className="w-1/2 flex justify-center px-12 flex-col">
        <animated.div style={{...animateMission}}>
          <h2 className="text-4xl font-bold text-primary-txt mb-4">Our Mission</h2>
        <p className="text-secondary-txt text-2xl font-medium leading-relaxed">To provide high-quality educational books that inspire, engage, and empower students at every level of learning.</p>
        </animated.div>
      </div>
      </section>


        {/* CEO SECTION */}
        <div className= "w-full">
         <animated.div style={{...animateCeo}} >
      <section className="flex justify-center items-center gap-60 px-10 bg-cover bg-center w-full" style={{backgroundImage: `url(${wave})`}}>
       <div className="w-1/2">
        <h2 className="text-4xl font-bold text-primary-txt mb-5 ml-5 ">Meet Our CEO</h2>
        {/* <h3 className="text-3xl font-semibold text-primary-txt ">John Doe</h3> */}
        <p className="text-[4em] text-primary-txt font-serif -mb-10 ">&quot;</p>
        <p className="text-primary-txt font-medium  text-2xl leading-relaxed ml-5">Passionate about education and dedicated to providing students with the best learning resources. <span className="text-3xl font-semibold text-primary-txt ml-3 ">-John Doe</span></p>
        </div>
        <div className="w-1/2 h-[36rem] relative">
   {/*    <div className=" absolute w-full h-full -top-24 bg-opacity-90 bg-[#a2d9ff] overflow-hidden shadow-inner"  style={{borderRadius: ' 30% 70% 70% 30% / 30% 30% 70% 70% '}}>
        
    </div> */}
    <img src={ceo} alt="CEO" className="absolute bottom-0 w-full h-full right-20 object-contain" />
        </div>
      </section>
      </animated.div>
      </div>

      <animated.div style={{...animateOwners}}>
      <section className=" mb-12 flex flex-col justify-center items-center gap-12 px-10 bg-cover bg-center py-10" style={{backgroundImage: `url(${waveInverted})`}}>
        <h2 className="text-4xl font-bold text-primary-txt mb-4 mt-52">Founders</h2>
        <animated.div style={{...animateFounders}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" p-6 flex flex-col items-center">
          <div className="w-52 h-52 relative overflow-hidden rounded-full mb-2">
      <img src={owner1} alt="OWNER" className="object-cover w-full h-full" />
    </div>
            <h3 className="text-3xl font-semibold text-primary-txt">Jane Smith</h3>
            <p className="mb-4 text-lg text-primary-txt">Founder</p>
            <p className="text-primary-txt text-center font-medium  text-2xl leading-relaxed">Bringing years of experience in educational publishing and a commitment to fostering a love for learning.</p>
          </div>
          <div className=" p-6 flex flex-col items-center">
          <div className="w-52 h-52 relative overflow-hidden rounded-full mb-2">
      <img src={owner2} alt="OWNER" className="object-cover w-full h-full"  />
    </div>
            <h3 className="text-3xl font-semibold text-primary-txt">Michael Johnson</h3>
            <p className="mb-4 text-lg text-primary-txt">Co-Founder</p>
            <p className="text-primary-txt text-center font-medium  text-2xl leading-relaxed">A visionary leader with a passion for innovation and improving educational outcomes for students worldwide.</p>
          </div>
        </div>
        </animated.div>
      </section>
      </animated.div>
    </div>
      
  <Messenger />
  </div>
  <Footer />
</div>
    );
  }
  
  export default About;