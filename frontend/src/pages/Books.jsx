import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';

// Lazy load the Navigation component
const LazyNavigation = lazy(() => import("../components/Navigation"));
// Lazy load the Footer component
const LazyFooter = lazy(() => import("../components/Footer"));

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(false); // useRef to track component mount state
  const cachedData = useRef([]); // useRef to store cached data

  useEffect(() => {
    isMounted.current = true; // Component mounted

    if (!isMounted.current) return; // Prevent fetching data if component is unmounted

    setLoading(true);
    // Check if data is already cached
    if (cachedData.current.length > 0) {
      setBooks(cachedData.current);
      setLoading(false);
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
        .finally(() => {
          if (isMounted.current) setLoading(false);
        });
    }

    return () => {
      isMounted.current = false; // Component will unmount
    };
  }, []); // Empty dependency array to run only on component mount

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Spinner />}>
        <LazyNavigation />
        <h2 className="text-2xl font-semibold mb-6 text-primary-txt pt-6 pl-6">Highlight Books</h2>
        <div className="flex-grow w-full mb-32">
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
              {books.map((book) => (
                <div key={book._id} className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                  <div className='flex justify-center items-center pt-5'>
                  <img src={book.imageSrc} alt={book.title} className="w-44 h-56 object-cover rounded-lg" />
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center text-nowrap">
                    <h3 className="text-lg text-primary-txt font-semibold mb-1">{book.title}</h3>
                    <p className="text-author-txt">{book.author}</p>
                    <p className="text-primary-txt font-light">{book.publisher}</p>
                    <p className="text-primary-txt font-light">{book.eduLevel}</p>
                  </div>
                  <div className="absolute inset-0 bg-primary-txt opacity-0 hover:opacity-15 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>
          )}
        </div>
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default Books;
