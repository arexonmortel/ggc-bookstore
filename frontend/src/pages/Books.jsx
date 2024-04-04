import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import Spinner from '../components/Spinner';
import BooksDisplay from '../components/BooksDisplay';
import Search from '../components/Search';

// Lazy load the Navigation component
const LazyNavigation = lazy(() => import("../components/Navigation"));
// Lazy load the Footer component
const LazyFooter = lazy(() => import("../components/Footer"));

function Books({books}) {

  const [loading, setLoading] = useState(true);
useEffect(()=>{
  setLoading(false)
},[books])


  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Spinner />}>
        <LazyNavigation />
        <div className="flex-grow w-full mb-32">
          {loading ? (
            <Spinner />
          ) : (
            <div className='pt-14'>       
            <Search/>
            <BooksDisplay books={books} />
            </div>
          )}
        </div>
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default Books;
