import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Office from './Office';
import config from '../config'
import { useSpring, animated } from 'react-spring';

const Form = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
     
    e.preventDefault();

    const {serviceId, templateId, userId} = config;
    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setShowSuccessMessage(true);
        // Clear form data after successful submission
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          address: '',
          message: '',
        });
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2000); // 1000 milliseconds = 1 second
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };
  const animationProps = useSpring({
    opacity: showSuccessMessage ? 1 : 0,
    transform: `translateY(${showSuccessMessage ? 0 : -20}px)`,
    config: {
      tension: 300, // Adjust the tension for a more springy effect
      friction: 10 // Adjust the friction for smoother animation
    }
  });

  
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-6">
          <label htmlFor="fullname" className="block text-primary-txt font-primary  mb-3">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-primary-txt font-primary  mb-3">Email:</label>
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
        <div className="mb-6">
          <label htmlFor="phone" className="block text-primary-txt font-primary  mb-3">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-primary-txt font-primary  mb-3">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-primary-txt font-primary  mb-3">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="appearance-none border border-opacity-50 bg-primary-bg border-primary-txt  rounded-2xl w-full py-2 px-3 text-primary-txt font-primary leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          ></textarea>
        </div>
        <div className=' flex w-full '>
        <animated.div style={animationProps}>
      {showSuccessMessage && (
        <div className="flex justify-center">
          <div className="bg-footer-bg bg-opacity-90 text-white outline outline-offset-2 outline-4 outline-primary-txt font-medium px-6 py-2 rounded-sm shadow-md overflow-hidden">
            Message sent successfully!
          </div>
        </div>
      )}
    </animated.div>
          <button type="submit" 
          disabled={!formData.fullname || !formData.email || !formData.address || !formData.email || !formData.message || !formData.phone}
          className="bg-primary-txt hover:bg-opacity-80 text-white py-2 px-6 rounded-md focus:outline-none focus:shadow-outline ml-auto shadow-md hover:shadow-lg disabled:bg-btn-color-disabled disabled:cursor-not-allowed">
            Submit
          </button>
        </div>
      </form>
      <Office />
    </div>
  );
};

export default Form;
