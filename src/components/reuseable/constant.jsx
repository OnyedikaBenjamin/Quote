

import React from 'react';
import avatar from "../features/assets/Avatars.png";
import { FaAngleLeft } from "react-icons/fa6";
import message from "../features/assets/chats.png";
import arrowRight from "../features/assets/Icon-right.png";
import { useNavigate, useLocation } from 'react-router-dom';

const Constant = () => {
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className="flex items-center justify-between bg-white shadow p-4 rounded-lg w-full max-w-full px-10">
      {location.pathname !== '/' && (
        <div className='flex items-center space-x-2'>
          <button className="w-8 h-8 flex items-center justify-center rounded-full" onClick={handleBackClick}>
            <FaAngleLeft />
          </button>
          <h2 className='mt-1 cursor-pointer' onClick={handleBackClick}>Back</h2>
        </div>
      )}

      <div className="flex items-center border border-gray-300 rounded-full px-2 py-2 w-full max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
        </svg>
        <input
          type="text"
          placeholder="Search here..."
          className="outline-none ml-2 w-full text-sm"
        />
      </div>

      <div className="flex items-center space-x-4 ml-6">
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 8.722v5.436c0 .416-.101.824-.29 1.184L6 17h5m0 0a3 3 0 006 0m-6 0H9"
            />
          </svg>
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

        <img src={message} alt="message" className="w-5 h-5" />

        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src={avatar}
            alt="User Avatar"
            className="object-cover w-full h-full"
          />
        </div>

        <img src={arrowRight} alt="arrow-right" />
      </div>
    </div>
  );
};

export default Constant;
