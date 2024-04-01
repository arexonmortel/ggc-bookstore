import React, { Suspense, lazy } from 'react';
import Spinner from '../components/Spinner';

// Lazy load the Navigation component
const LazyNavigation = lazy(() => import("../components/Navigation"));
// Lazy load the Footer component
const LazyFooter = lazy(() => import("../components/Footer"));

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Spinner />}>
        <LazyNavigation />
        <div className="flex-grow">
          <p>Contact</p>
        </div>
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default Contact;
