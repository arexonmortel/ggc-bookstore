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
  const [error, setError] = useState(false);


useEffect(()=>{
  books.length ? setLoading(false) : setLoading(true)

      // Simulate loading time
      const timeout = setTimeout(() => {
        if (loading) {
          setError(true);
          setLoading(false);
        }
      }, 120000); // 2 minutes
      return () => clearTimeout(timeout);

},[books])

const refreshPage = () => {
  window.location.reload();
};

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Spinner />}>
        <LazyNavigation />
        <div className='pt-12'>
          <Search />
        </div>
        <div className="flex-grow w-full mb-32">
          {error ? (
            <div className="flex flex-col items-center justify-center mt-10">
              <p>Something went wrong, please try again later.</p>
              <button onClick={refreshPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Refresh Page
              </button>
            </div>
          ) : loading ? (
            <Spinner />
          ) : (
            <div >
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
