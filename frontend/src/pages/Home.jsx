import React, { Suspense, lazy } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

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
          <LazyHero />
          <LazyAffiliate />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
