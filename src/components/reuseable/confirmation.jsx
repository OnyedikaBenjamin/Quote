
import React, { useState } from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); 

  const handleConfirm = () => {
    setIsLoading(true); 
    setIsOpen(false);    
    setTimeout(() => {
      onConfirm();
      setIsLoading(false); 
      setIsSuccess(true);  
    }, 3000); 
  };

  const handleCancel = () => {
    onCancel();
    setIsOpen(false);
  };

  const handleCloseSuccess = () => {
    setIsSuccess(false); 
  };

  return (
    <>
    
      {isOpen && !isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-md w-[40%]">
            <h2 className="text-lg font-bold mb-4 text-[#101928]">Confirmation</h2>
            <p className='text-[#475367]'>
              You are about to submit this quote in response to RFQ ID, this will immediately be
              sent to the client "Westend Clear Hospital". Are you sure you want to proceed?
            </p>
            <div className="flex justify-end mt-4">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleCancel}>
                Cancel
              </button>
              <button className="bg-[#175CFF] text-white font-bold py-2 px-4 rounded ml-4" onClick={handleConfirm}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

     
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#175CFF] mb-4"></div>
            <p className="text-lg font-semibold text-[#101928]">Sending Quote...</p>
          </div>
        </div>
      )}

   
      {isSuccess && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg p-4 w-[300px] flex items-center justify-between">
          <div className="flex items-center">
           
            <span className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
              <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="text-sm font-medium text-gray-800">RFQ ID sent successfully!</p>
          </div>
        
          <button className="text-gray-500 hover:text-gray-700" onClick={handleCloseSuccess}>
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ConfirmationDialog;
