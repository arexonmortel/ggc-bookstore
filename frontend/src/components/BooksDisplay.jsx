import React, { useState } from 'react';
import { FiPlus, FiMinus,  FiX  } from 'react-icons/fi'; 
import Select from 'react-select';

function BooksDisplay({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [numOfCopies, setNumOfCopies] = useState(1);
  const [bookSize, setBookSize] = useState('');


  const handleBookClick = (book) => {
    setSelectedBook(book);
    setNumOfCopies(1)
    console.log(book)
  };
  const handleClickTop= () =>{
    window.scrollTo(0, 0);  
    console.log('clicked')
   }
   

  const handleBuyBook = () => {
    // Implement buy book functionality here
    // You can use the selectedBook and numOfCopies states to process the purchase
  };

  const increment = () => {
    if (numOfCopies < selectedBook.availability) {
      setNumOfCopies(numOfCopies + 1);
    }
  };

  const decrement = () => {
    if (numOfCopies > 1) {
      setNumOfCopies(numOfCopies - 1);
    }
  };
  const handleClose = () => {
    setSelectedBook(null); // Reset selectedBook to null
  };

  const handleSelectChange = (selectedOption) => {
    setBookSize(selectedOption.value);
  };


  const options = [
    { value: 'Small', label: 'Small' },
    { value: 'Big', label: 'Big' },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '2px solid #e2e8f0',
      borderRadius: '0.375rem',
      boxShadow: state.isFocused ? '0 0 0 1px rgba(25, 24, 71, 0.2)' : 'none',
      color: '#191847',
      fontWeight: '300',
      '&:hover': {
        borderColor: 'rgba(25, 24, 71, 0.2)',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#191847' : 'white',
      color: state.isSelected ? 'white' : '#4a5568',
      
      '&:hover': {
        backgroundColor: 'rgba(25, 24, 71, 0.2)',
        color: '#191847',
      },
    }),
  };

  return (
    <div>
      {selectedBook && (
        <div className='relative overflow-hidden mx-[23rem]'>
          <button onClick={handleClose} className="absolute top-8 right-0  p-2 bg-191847 text-white rounded-full focus:outline-none">
        <FiX className='text-primary-txt text-opacity-55 text-3xl hover:text-red-500' />
      </button>
          <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 rounded-3xl mt-8">
          <div className="flex justify-center items-center ">
              <img src={selectedBook.imageSrc} alt={selectedBook.title} className="w-64 h-80 object-cover rounded-lg shadow-2xl drop-shadow-2xl" />
            </div>
            <div className="flex flex-col justify-center">
              <p className={`text-white px-2 w-max rounded-xl text-sm mb-2 ${selectedBook.availability ? 'bg-green-500': 'bg-red-500'}`}>{selectedBook.availability ? "Available": "Out of stock"}</p>
              <h3 className="text-2xl text-primary-txt font-semibold mb-6">{selectedBook.title}</h3>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Author:</span> {selectedBook.author}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Published:</span> {selectedBook.pubYear}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Genre:</span> {selectedBook.genre}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Approved:</span> {selectedBook.approvedBy}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Education Level:</span> {selectedBook.eduLevel}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Size:</span> {selectedBook.bookSize}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Pages:</span> {selectedBook.pages}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Stocks left:</span> {selectedBook.availability}</p>
              {selectedBook.publisher.toLowerCase() === "merryland publishing corp." && (
                <div className='flex items-center gap-2 '>
                      <p className='text-primary-txt font-semibold'>Select Size:</p>
                        <Select
                        className="rounded-lg outline-none w-[6.7rem]"
                        options={options}
                        onChange={handleSelectChange}
                        styles={customStyles}
                        placeholder= "Size"
                      />
                </div>
                )}
              <div className='flex items-center gap-6'>
                <p className='font-semibold text-primary-txt'>Quantity:</p>
              <div className="flex items-center mb-6 mt-6 justify-between">
                 <button onClick={decrement} className={`${numOfCopies == 1 ? "opacity-30": "opacity-100"} border border-primary-txt border-opacity-50 hover:border-opacity-0  rounded-full px-2 py-2 hover:bg-primary-txt hover:bg-opacity-30 focus:outline-none`}>
                   <FiMinus />
                 </button>
                 <span className="mx-4 text-gray-600 w-2">{numOfCopies}</span>
                 <button onClick={increment} className="border border-primary-txt border-opacity-50 hover:border-opacity-0  rounded-full px-2 py-2 hover:bg-primary-txt hover:bg-opacity-30 focus:outline-none">
                   <FiPlus />
                 </button>
               </div>
               </div>
               <div className='flex items-center justify-between gap-2'>
               <button
                onClick={handleBuyBook}
                className="bg-primary-txt text-white px-14 py-2 rounded-md hover:bg-opacity-80 text-nowrap"
                disabled={selectedBook.availability < numOfCopies}
              >
                Buy Now
              </button>
              <button
                onClick={handleBuyBook}
                className=" text-primary-txt border-primary-txt border hover:bg-white hover:border-primary-txt px-16 py-2 rounded-md hover:bg-opacity-80"
                disabled={selectedBook.availability < numOfCopies}
              >
                Inquire
              </button>
               </div>
            </div>
          </div>
        </div>
        </div>
      )}
      <h2 className="text-2xl font-semibold text-primary-txt pl-6 mt-10">Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => {handleBookClick(book); handleClickTop()}}
          >
            <div className="flex justify-center items-center pt-5">
              <img src={book.imageSrc} alt={book.title} className="w-44 h-56 object-cover rounded-lg" />
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
    </div>
  );
}

export default BooksDisplay;
