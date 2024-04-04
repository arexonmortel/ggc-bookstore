import React, { Suspense, lazy } from 'react';
import Spinner from '../components/Spinner';
import Form from '../components/Form';
import SideCover from '../components/SideCover';

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
        <div className="container mx-auto flex flex-wrap py-12 px-32">
  <div className="w-3/5 pr-4 "> {/* 60% width */}
    <SideCover />
  </div>
  <div className="w-2/5 "> {/* 40% width */}
    <Form />
  </div>
</div>
        </div>
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default Contact;
