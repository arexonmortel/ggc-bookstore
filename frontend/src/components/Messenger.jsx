import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';

const Messenger = () => {
  const pageUsername = '302373696298499'; // Replace with your page username
  const messengerLink = `https://m.me/${pageUsername}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a href={messengerLink} target="_blank" rel="noopener noreferrer">
        <button className="flex items-center justify-center gap-3 font-semibold bg-primary-txt  text-white  px-5 py-3 rounded-md hover:outline hover:outline-offset-2 hover:outline-primary-txt">
          <FaFacebookMessenger className="text-2xl text-white" />
          Chat with Us
        </button>
      </a>
    </div>
  );
};

export default Messenger;
