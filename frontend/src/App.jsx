import React, { Suspense, lazy,  useEffect, useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
import axios from 'axios';
import './index.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';


// Lazy load route components
const LazyHome = lazy(() => import('./pages/Home'));
const LazyBooks = lazy(() => import('./pages/Books'));
const LazyAffiliate = lazy(() => import('./pages/Affiliate'));
const LazyContact = lazy(() => import('./pages/Contact'));
const LazyAboutMerryland = lazy(() => import('./pages/about/AboutMerryland'));
const LazyAboutJedigar = lazy(() => import('./pages/about/AboutJedigar'));
const LazyAboutB2g2 = lazy(() => import('./pages/about/AboutB2g2'));

function App() {
  const [books, setBooks] = useState([]);
  const isMounted = useRef(false); // useRef to track component mount state
  const cachedData = useRef([]); // useRef to store cached data

  useEffect(() => {
    isMounted.current = true; // Component mounted

    if (!isMounted.current) return; // Prevent fetching data if component is unmounted

    
    // Check if data is already cached
    if (cachedData.current.length > 0) {
      setBooks(cachedData.current);
      
    } else {
      axios
        .get('http://localhost:5555/books')
        .then((response) => {
          const booksWithBase64Images = response.data.data.map((book) => {
            const blob = new Blob([new Uint8Array(book.image.data.data)], { type: 'image/png' });
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              const updatedBook = { ...book, imageSrc: reader.result }; // Create a new book object with updated imageSrc
              setBooks((prevBooks) => [...prevBooks, updatedBook]); // Update books state with the new book
            };
            return book;
          });
          // Cache the data
          cachedData.current = books;
        })
        .catch((error) => {
          console.error('Error fetching books:', error);
        })
    }

    return () => {
      isMounted.current = false; // Component will unmount
    };
  }, []); // Empty dependency array to run only on component mount

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
          <Route path='/books' element={<LazyBooks books = {books} />} />
          <Route path='/affiliate' element={<LazyAffiliate />} />
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
