import { animated, useSpring } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import SelectedBookDetails from './SelectedBookDetails';


function BooksDisplay({ books, searchTerm }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [numOfCopies, setNumOfCopies] = useState(1);
  const [bookSize, setBookSize] = useState('');


  const animatedBooks = useSpring({
    from: { y: 50, opacity:0 },
    to: { y: 0, opacity:1},
    config: { duration: 700 },
    delay: 500,
  
  })
  useEffect(()=>{
    setSelectedBook(null)
  },[searchTerm])

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setNumOfCopies(1)
    //console.log(book)
  };
  const handleClickTop= () =>{
    window.scrollTo(0, 0);  
    //console.log('clicked')
   }
   


  const handleClose = () => {
    setSelectedBook(null); // Reset selectedBook to null
  };

  const handleSelectChange = (selectedOption) => {
    setBookSize(selectedOption.value);
  };



  return (
    <div>
      {selectedBook && (
        <SelectedBookDetails selectedBook = {selectedBook} handleClose= {handleClose} handleSelectChange ={handleSelectChange}/>
      )}
      <h2 className="text-2xl font-semibold text-primary-txt pl-6 mt-10">Collection</h2>
      <animated.div style={{...animatedBooks}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => {handleBookClick(book); handleClickTop()}}
          >
            <div className="flex justify-center items-center pt-5">
              <img src={book.imageUrl} alt={book.title} className="w-44 h-56 object-cover rounded-lg" />
            </div>
            <div className="p-4 flex flex-col items-center justify-center  text-center">
              <h3 className="text-lg text-primary-txt font-semibold mb-1">{book.title}</h3>
              <p className="text-author-txt">{book.author}</p>
              <p className="text-primary-txt font-light text-nowrap text-center ">{book.publisher}</p>
              <p className="text-primary-txt font-extralight">{book.eduLevel}</p>
            </div>
            <div className="absolute inset-0 bg-primary-txt opacity-0 hover:opacity-15 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        ))}
      </div>
      </animated.div>
    </div>
  );
}

export default BooksDisplay;
