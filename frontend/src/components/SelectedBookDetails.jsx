import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { MdOutgoingMail } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useSpring, animated } from '@react-spring/web'
import { CgUnavailable } from "react-icons/cg";
import emailjs from 'emailjs-com';
import configs from '../config'
import axios from 'axios';

export default function SelectedBookDetails({selectedBook, handleSelectChange, handleClose}) {
    const [inquireClicked, setInquireClicked] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [responseMessage, setResponseMessage] = useState('');
    const [isClosing, setIsClosing] = useState(false)
    const [addToCartHover, setAddToCartHover] = useState(false)
    const image = selectedBook.imageUrl


    const animatedMessage = useSpring({
      opacity: showMessage ? 1 : 0,
      transform: `translateY(${showMessage ? 0 : -20}px)`,
      config: {
        tension: 300, // Adjust the tension for a more springy effect
        friction: 10 // Adjust the friction for smoother animation
      }
    });
    const animatedComingSoon = useSpring({
      opacity: addToCartHover ? 1 : 0,
      transform: `translateX(${addToCartHover ? 0 : -30}px)`,
      config: {
        tension: 300, // Adjust the tension for a more springy effect
        friction: 10 // Adjust the friction for smoother animation
      }
    });

    const [formData, setFormData] = useState({
        bookTitle :selectedBook.title,
        bookGenre: selectedBook.genre, 
        publisher: selectedBook.publisher,
        imageUrl: selectedBook.imageUrl,
        name: '',
        contactNumber: '',
        email: '',
        region: '',
        orderQuantity: 1,
        message: '',
      });

      const animateInquire = useSpring({
        from: { x: 200, opacity:0 },
        to: { x: 0, opacity:1},
        config: { duration: 500 },
        immediate: inquireClicked, 
       // onChange: (props) => console.log('animateForm1:', props)
      })
      const animateCancelInquire = useSpring({
        from: { x: 200, opacity:0 },
        to: { x: 0, opacity:1},
        config: { duration: 500 },
        immediate: inquireClicked,
        //onChange: (props) => console.log('animateForm2:', props)
      })

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        window.scrollTo(0, 0); 
        console.log(formData);
        const {serviceId, templateId, userId} = configs.configInquire;
        emailjs.sendForm(serviceId, templateId, e.target, userId, formData)
          .then((result) => {
           // console.log('Email sent successfully:', result.text);
           setShowMessage(true);
           setResponseMessage('Message sent successfully!');
            // Clear form data after successful submission
            setFormData({
              bookTitle :'',
              bookGenre: '', 
              publisher: '',
              name: '',
              contactNumber: '',
              email: '',
              region: '',
              orderQuantity: 1,
              message: '',
            });
            setTimeout(() => {
              setShowMessage(false);
            }, 2000); // 1000 milliseconds = 1 second
          }, (error) => {
            console.error('Error sending email:', error.text);
          });
          try {
            const response = await axios.post('http://localhost:5555/book-inquire', formData);
            if (response.status === 200) {
              console.log("Inquiry successful")
              setShowMessage(true);
              setResponseMessage('Message sent successfully!');
            }
          } catch (error) {
            setTimeout(() => {
              setShowMessage(false);
            }, 2000);
            console.error('Error sending message:', error);
            setResponseMessage('Failed to send message. Please try again later.');
          }
          let timerId
          if (timerId) {
            clearTimeout(timerId); // Clear any existing timer
          }
        
          timerId = setTimeout(() => {
            handleClose();
            timerId = null; // Reset timerId after it's been executed
          }, 2200);
      };
      

    const handleInquire = () => {
        // Implement buy book functionality here
        // You can use the selectedBook and numOfCopies states to process the purchase
        setInquireClicked(true)
        
      };

      const handleCancelInquire = ()=>{
        setInquireClicked(false)
      }
      //useEffect(()=>{alert(inquireClicked)},[inquireClicked])

      const handleAddToCart =()=>{
        // Implement add to cart functionality here
        // You can use the selectedBook and numOfCopies states to process the purchase
        
      }


 /*    const increment = () => {
        if (numOfCopies < selectedBook.availability) {
          setNumOfCopies(numOfCopies + 1);
        }
      };
    
      const decrement = () => {
        if (numOfCopies > 1) {
          setNumOfCopies(numOfCopies - 1);
        }
      }; */ 
/*       const options = [

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
      }; */
      const regions = [
        "Region I – Ilocos Region",
        "Region II – Cagayan Valley",
        "Region III – Central Luzon",
        "Region IV‑A – CALABARZON",
        "MIMAROPA Region",
        "Region V – Bicol Region",
        "Region VI – Western Visayas",
        "Region VII – Central Visayas",
        "Region VIII – Eastern Visayas",
        "Region IX – Zamboanga Peninsula",
        "Region X – Northern Mindanao",
        "Region XI – Davao Region",
        "Region XII – SOCCSKSARGEN",
        "Region XIII – Caraga",
        "NCR – National Capital Region",
        "CAR – Cordillera Administrative Region",
        "BARMM – Bangsamoro Autonomous Region in Muslim Mindanao"
      ];
  
      return (
    <div className='relative mx-[23rem] h-[42em] '>
    {showMessage && (
      <animated.div style={animatedMessage} className="mt-4 p-2 bg-primary-txt border outline-primary-txt outline outline-offset-2 rounded text-center">
        <p className="text-white">{responseMessage}</p>
      </animated.div>
      )}
  { !inquireClicked && (
            <button onClick={handleClose} className="absolute top-20 right-0  p-2 bg-191847 text-white rounded-full focus:outline-none">
            <FiX className='text-primary-txt text-opacity-55 text-3xl hover:text-red-500' />
          </button>
  )
  }
          <div className="flex flex-col items-center justify-center h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 rounded-3xl mt-8">
          <div className="flex justify-center items-center ">
              <img src={selectedBook.imageUrl} alt={selectedBook.title} className="w-64 h-80 object-cover rounded-lg shadow-2xl drop-shadow-2xl" />
            </div>
            {!inquireClicked ?
             (
           <animated.div style={animateInquire} >
            <div className="flex flex-col justify-center ">
              <p className={`text-white px-2 w-max rounded-xl text-sm mb-2 ${selectedBook.availability ? 'bg-green-500': 'bg-red-500'}`}>{selectedBook.availability ? "Available": "Out of stock"}</p>
              <h3 className="text-2xl text-primary-txt font-semibold mb-6">{selectedBook.title}</h3>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Author:</span> {selectedBook.author}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Publisher:</span> {selectedBook.publisher}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Year Of Publication:</span> {selectedBook.pubYear}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Genre:</span> {selectedBook.genre}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Approved:</span> {selectedBook.approvedBy}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Education Level:</span> {selectedBook.eduLevel}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Size:</span> {selectedBook.bookSize}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Pages:</span> {selectedBook.pages}</p>
              <p className="text-primary-txt font-light mb-1"><span className='font-semibold mr-2'>Stocks left:</span> {selectedBook.availability}</p>
{/*               {selectedBook.publisher.toLowerCase() === "merryland publishing corp." && (
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
                )} */}
{/*               <div className='flex items-center gap-6'>
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
               </div> */}
               <div className='flex'> 
               {selectedBook.availability > 0 ? 
               (<button
                onClick={handleInquire}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-primary-txt text-white px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-txt focus:ring-opacity-50"
              >
                <span className="text-nowrap">Inquire Now</span>
                <MdOutgoingMail className='text-2xl' />
              </button>)
               :
               (
               <button
               disabled
                className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-txt focus:ring-opacity-50 bg-gray-400 text-gray-700 cursor-not-allowed"
               >
                <span className="text-nowrap">Not Available</span>
                <CgUnavailable className='text-2xl' />
              </button>
            )}

            {selectedBook.availability > 0 ? 
            (
              <div className='relative'>
        {/*       <button
              onMouseEnter={()=> setAddToCartHover(true)}
              onMouseLeave={()=> setAddToCartHover(false)}
              onClick={handleAddToCart}
              className="mt-6 ml-4 inline-flex items-center justify-center gap-2 bg-white text-primary-txt px-4 py-2 rounded-md  border border-primary-txt hover:bg-primary-txt hover:text-white hover:drop-shadow-xl hover:bg-opacity-80"
            >
              <span className="text-nowrap">Add to Cart</span>
              <FaShoppingCart className='text-2xl' />
            </button>
            {
              addToCartHover ? (
                <animated.div style ={animatedComingSoon}>
                <div
                className="absolute  left-48 bottom-0 text-primary-txt font-medium px-6 py-2 rounded-md bg-opacity-50 bg-gray-300 text-nowrap "
              >
                Coming Soon
              </div>
              </animated.div>
              ) :(<></>)
            } */}
        </div>):( <></> ) }
          </div>
            </div>
            </animated.div>
            ) 
            :
             (
                <animated.div style={animateCancelInquire}>
                <h3 className="text-2xl text-primary-txt font-semibold mb-6">Fill out the form</h3>
      <form onSubmit={handleSubmit} >
        <div className='flex justify-center items-center mb-4'>
            <div className="space-y-4">
            <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            pattern="[0-9]{11}"
            minLength="11"
            maxLength="11"
            placeholder="e.g., 09123456789"
            value={formData.contactNumber}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label htmlFor="region">Region:</label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Region</option>
            {regions.map((region, index) => (
          <option key={index} value={region}>{region}</option>
        ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Quantity of books want to buy:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Additional Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder='Optional...'
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
            </div>
            <div className='hidden' >
                <input type="text" readOnly value={formData.bookTitle} name='bookTitle' id='bookTitle'/>
                <input type="text" readOnly value={formData.bookGenre} name='bookGenre' id='bookGenre'/>
                <input type="text" readOnly value={formData.publisher} name='publisher' id='publisher'/>
                <input type="image" readOnly src={image} name={image} id={image} width="48" height="48"/>
            </div>
        </div>
        <div className="flex justify-end">
          <button type="button" className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md focus:outline-none hover:bg-red-500 hover:text-white" onClick={handleCancelInquire}>Cancel</button>
          <button type="submit" className="px-4 py-2 bg-primary-txt text-white rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-txt focus:ring-opacity-50">Send Inquiry</button>
        </div>
      </form>
                 </animated.div>
                  )
            }
          </div>
        </div>
        </div>
  )
}
