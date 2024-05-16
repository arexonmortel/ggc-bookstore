import React, { Suspense, lazy } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import Hero from '../components/Hero'
import Messenger from "../components/Messenger";


// Lazy load the Hero component
const LazyHero = lazy(() => import('../components/Hero'));
// Lazy load the Affiliate component
const LazyAffiliate = lazy(() => import('../components/AffiliateCard'));

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Spinner />}>
        <Navigation />
        <div className="flex-grow">
          <Hero />
          <LazyAffiliate />
          <Messenger />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
