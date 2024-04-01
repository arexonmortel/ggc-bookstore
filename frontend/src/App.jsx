import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';

// Lazy load route components
const LazyHome = lazy(() => import('./pages/Home'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyBooks = lazy(() => import('./pages/Books'));
const LazyAffiliate = lazy(() => import('./pages/Affiliate'));
const LazyContact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<LazyHome />} />
          <Route path='/about' element={<LazyAbout />} />
          <Route path='/books' element={<LazyBooks />} />
          <Route path='/affiliate' element={<LazyAffiliate />} />
          <Route path='/contact' element={<LazyContact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
