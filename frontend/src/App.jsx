import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
import './index.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';


// Lazy load route components
const LazyHome = lazy(() => import('./pages/Home'));
const LazyBooks = lazy(() => import('./pages/Books'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyContact = lazy(() => import('./pages/Contact'));
const LazyAboutMerryland = lazy(() => import('./pages/about/AboutMerryland'));
const LazyAboutJedigar = lazy(() => import('./pages/about/AboutJedigar'));
const LazyAboutB2g2 = lazy(() => import('./pages/about/AboutB2g2'));

function App() {


  return (
    <div>
      <Suspense fallback={
                <div className="flex flex-col min-h-screen">
                <Navigation />
                <div className="flex-grow mb-32" > {/* This div expands to fill remaining vertical space */}
                <Spinner/>
                </div>
                  <Footer/>     
              </div>
      }>
        <Routes>
          <Route path='/' element={<LazyHome />} />
          <Route path='/books' element={<LazyBooks />} />
          <Route path='/aboutggc' element={<LazyAbout />} />
          <Route path='/contact' element={<LazyContact />} />
          <Route path='/about/merryland' element={<LazyAboutMerryland />} />
          <Route path='/about/jedigar' element={<LazyAboutJedigar />} />
          <Route path='/about/b2g2' element={<LazyAboutB2g2 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
