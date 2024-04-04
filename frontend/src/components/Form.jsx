import React, { useState } from 'react';
import Office from './Office';


const Form = () => {
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
    // Handle form submission logic here
    console.log(formData);
  };

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
      <button type="submit" className="bg-primary-txt hover:bg-opacity-80 text-white py-2 px-6 rounded-md focus:outline-none focus:shadow-outline ml-auto shadow-md hover:shadow-lg">
    Submit
</button>

</div>
    </form>
    <Office />
    </div>
  );
};

export default Form;
