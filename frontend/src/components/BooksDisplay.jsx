 
 function BooksDisplay({books}) {
    return (
      <div>
        <h2 className="text-2xl font-semibold  text-primary-txt pl-6">Highlight Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
        {books.map((book) => (
          <div key={book._id} className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className='flex justify-center items-center pt-5'>
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
    )
 }

 export default BooksDisplay