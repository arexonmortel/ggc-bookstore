import axios from 'axios';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import BooksDisplay from '../components/BooksDisplay';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import Messenger from "../components/Messenger";


// Lazy load the Navigation component
const LazyNavigation = lazy(() => import("../components/Navigation"));
// Lazy load the Footer component
const LazyFooter = lazy(() => import("../components/Footer"));

function Books() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [booksFound, setBooksFound] = useState(true);
  const isMounted = useRef(false); // useRef to track component mount state
  const cachedData = useRef([]); // useRef to store cached data

/*   // Function to handle search term change
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  }; */

  useEffect( () => {
    isMounted.current = true; // Component mounted

    if (!isMounted.current) return; // Prevent fetching data if component is unmounted
    
    // Check if data is already cached
    if (cachedData.current.length > 0) {
      setBooks(cachedData.current);
  
      
    } else {
     axios
        .get('http://localhost:5555/books')
        .then((response) => {
          const books = response.data.data
              setBooks(books);
              cachedData.current = books; // Cache data
             /*  console.log(Array.isArray(books))
              console.log(books) */
              setLoading(false)
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
          console.error('Error fetching books:', error);
        })
    }

    return () => {
      isMounted.current = false; // Component will unmount
    };
  }, []); // Empty dependency array to run only on component mount

  
  const handleSearch = async (searchResults) => {
    // Update the state variable directly without logging it
    setBooks(searchResults);

    
  };
  const  handleSearchTerm = async (searchTerm)=>{
    setSearchTerm(searchTerm)
    //console.log("Book Page Search Term: ", searchTerm)
  }
  

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Spinner />}>
        <LazyNavigation />
        <div className='mt-3'>
          <Search onSearch={handleSearch} onBooksFound={setBooksFound} sendSearchTerm ={handleSearchTerm}/>
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
          ) : ( !booksFound ? (
            <div className='mt-6'>
        <h1 className='opacity-80 text-center mt-24'>No Books Found...</h1>
      </div>
          ):
              <BooksDisplay books={books} searchTerm ={searchTerm}/>
          
          )}
          {/* <Messenger /> */}
        </div>
       
        <LazyFooter />
      </Suspense>
   
      
   </div>
  );
}

export default Books;
