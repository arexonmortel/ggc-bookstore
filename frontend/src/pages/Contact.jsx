import React, { Suspense, lazy } from 'react';
import Spinner from '../components/Spinner';
import Form from '../components/Form';
import SideCover from '../components/SideCover';
import { useSpring, animated } from '@react-spring/web'
import Messenger from "../components/Messenger";



// Lazy load the Navigation component
const LazyNavigation = lazy(() => import("../components/Navigation"));
// Lazy load the Footer component
const LazyFooter = lazy(() => import("../components/Footer"));

function Contact() {
  const animatedSideCover = useSpring({
    from: { y: -200, opacity:0 },
    to: { y: 0, opacity:1},
    config: { duration: 700 },
  
  })
  const animatedForm = useSpring({
    from: { y: 200, opacity:0 },
    to: { y: 0, opacity:1},
    config: { duration: 700 },
  
  })
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Spinner />}>
        <LazyNavigation />
        <div className="flex-grow">
        <div className="container mx-auto flex flex-wrap py-12 px-32">
  <animated.div style={{...animatedSideCover}} className="w-3/5 pr-4 "> {/* 60% width */}
    <SideCover />
  </animated.div>
  <animated.div style={{...animatedForm}} className="w-2/5 "> {/* 40% width */}
    <Form />
  </animated.div>
  <Messenger />
</div>
        </div>
        <LazyFooter />
      </Suspense>

    </div>
  );
}

export default Contact;
