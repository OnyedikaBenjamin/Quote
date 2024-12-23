

import React, { useState, useRef } from 'react';
const TermsAndAttachmentsForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null); 

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleBrowseFiles = () => {
    fileInputRef.current.click(); 
  };

  return (
    
    <div className="w-full px-8 py-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Terms and Attachments</h2>
      <p className="text-gray-500">Provide detailed information on payment and delivery terms</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Terms</label>
          <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
            <option>Net 30</option>
            <option>Net 60</option>
            <option>Net 90</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Delivery Schedule</label>
          <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
            <option>Immediate delivery</option>
            <option>In 3 Days</option>
            <option>In 7 Days</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Shipping Method</label>
          <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
            <option>Courier Services</option>
            <option>Postal Mail</option>
            <option>Express Shipping</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Lead Time</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              className="mt-1 block w-1/2 border border-gray-300 rounded-md p-2"
              defaultValue={10} 
            />
            <select className="mt-1 block w-1/2 border border-gray-300 rounded-md p-2">
              <option>Days</option>
              <option>Weeks</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Attachments</label>
        <div className="mt-2 border-dashed border-2 border-gray-300 rounded-md p-4 text-center">
          <p className="text-gray-500">Click to upload or drag and drop files</p>
  
          <input
            type="file"
            ref={fileInputRef} 
            onChange={handleFileUpload}
            className="hidden"
          />
     
          {selectedFile && <p className="mt-2 text-sm text-gray-500">{selectedFile.name}</p>}
          
          <button
            type="button"
            onClick={handleBrowseFiles} 
            className="mt-4 text-blue-600 underline"
          >
            Browse Files
          </button>
        </div>
      </div>

      <div className="mt-6 flex space-x-4 justify-end">
        <button className="border text-[#475367] px-4 py-2 rounded text-sm">Cancel</button>
        <button className="border-blue-600 border-2 text-[#175CFF] px-4 py-2 rounded-md text-sm">
          Save as Draft
        </button>
        <button className="bg-blue-500 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
          Continue
        </button>
      </div>
    </div>
  );
};

export default TermsAndAttachmentsForm;
