import React, {Suspense, lazy} from 'react';
import Spinner from '../components/Spinner';


const LazyNavigation = lazy(()=>import ('../components/Navigation'));
const LazyFooter = lazy(()=> import ('../components/Footer'));

function About (){
    return (
<div className="flex flex-col min-h-screen">
  <LazyNavigation />
  <Suspense fallback = {<Spinner/>}>
  <div className="flex-grow"> {/* This div expands to fill remaining vertical space */}
  <p>About Us</p>
  </div>
    <LazyFooter/>
  </Suspense>
</div>
    )
}

export default About;