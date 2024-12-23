


import React, { useState } from 'react';

import deleteIcon from "../features/assets/icon3.png";
import check from "../features/assets/Icon-right.png";
import calendarIcon from "../features/assets/icon.png"; 

const Content = () => {
  const [items, setItems] = useState([
    {
      name: 'Oxygen Concentrator',
      variant: 'Blue',
      quantity: 100,
      price: 12.00,
      expectedDelivery: '2023-12-02',
    },
    {
      name: 'Mechanical Ventilator',
      variant: 'Blue',
      quantity: 100,
      price: 12.00,
      expectedDelivery: '2023-12-02',
    },
    {
      name: 'Patient Monitor',
      variant: 'Blue',
      quantity: 100,
      price: 12.00,
      expectedDelivery: '2023-12-02',
    },
    {
      name: 'Mechanical Ventilator',
      variant: 'Blue',
      quantity: 100,
      price: 12.00,
      expectedDelivery: '2023-12-02',
    }
    
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = newQuantity;
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 10);
  };

  return (
    <div className="flex">
    
    
      <div className="w-3/4 flex-grow px-0">
        <div className="shadow-lg p-4 rounded-lg border">
          <h1 className="text-xl font-semibold">Request for Quote</h1>
          <p className="text-[#98A2B3] mt-2">Fill out these details to send the RFQ</p>

          <form className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="rfqNo" className="block text-sm font-medium text-gray-700">
                  RFQ No
                </label>
                <input
                  type="text"
                  id="rfqNo"
                  placeholder="RFQ12"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  id="department"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="Maternity">Maternity</option>
                </select>
              </div>
              <div>
                <label htmlFor="expectedDelivery" className="block text-sm font-medium text-gray-700">
                  Expected Delivery Date
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="date"
                    id="expectedDelivery"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>
            </div>
            <h3 className="flex justify-around ml-[32%] mb-4">
              Calculated based on lead time and issue date
            </h3>
          </form>

          <div className="border-b mt-9" />
          
          <h2 className="mt-4">Add Items</h2>
          <div className="mt-6">
            <table className="w-full  border-gray-200 border-separate border-spacing-1">
              <thead className="bg-gray-50">
                <tr>
                  <th className=" border-gray-200 px-4 py-2 text-left text-sm text-gray-600">
                    Items
                  </th>
                  <th className=" border-gray-200 px-4 py-2 text-left text-sm text-gray-600">
                    Variant
                  </th>
                  <th className=" border-gray-200 px-4 py-2 text-left text-sm text-gray-600">
                    Quantity
                  </th>
                  <th className=" border-gray-200 px-4 py-2 text-left text-sm text-gray-600">
                    Price
                  </th>
                  <th className=" border-gray-200 px-4 py-2 text-left text-sm text-gray-600">
                    Expected Delivery
                  </th>
                  <th className=" border-gray-200 px-4 py-2 text-left text-sm text-gray-600">
                    Amount
                  </th>
                  <th className=" border-gray-200 px-4 py-2 text-left text-sm text-gray-600"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className='  mb-4 '>
                  <td className=" ">
      
                   <div className="flex justify-between items-center bg-[#D0D5DD] border-2 rounded-lg h-10 text-[#98A2B3]">
                   <span>{item.name}</span>
            
              <img src={check} alt="check" className="ml-2 w-4 h-4" />
             </div>
                </td>
                    <td className=" rounded-lg border-[#D0D5DD] border-2 px-6 py-2 mt-1 flex items-center">
                      {item.variant}
                      <img src={check} alt="check" className="ml-2 w-4 h-4" />
                    </td>
                    <div></div>
                    <td className=" border-[#D0D5DD] border-2 rounded-lg px-4 py-2 ">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                        className="  p-1 w-12"
                      />
                      <span> Pack</span>
                    </td>
                    <td className=" border-[#D0D5DD] border-2 rounded-lg px-4 py-2  ">${item.price}</td>
                    <td className=" border-[#D0D5DD] border-2 rounded-lg px-4 py-2 flex items-center">
                      <img src={calendarIcon} alt="calendar" className="w-4 h-4 mr-2" />
                      {item.expectedDelivery}
                    </td>
                    <td className="  px-4 py-2">${item.quantity * item.price}</td>
                    <td className=" px-4 py-2">
                      <img src={deleteIcon} alt="delete" className="w-4 h-4 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-b mt-9" />

          
          <div className="mt-6 flex justify-end ">
            <div className="flex space-x-2">
            <p className="text-sm text-gray-600 ">Sub Total</p>
              <p className="text-lg font-semibold mr-[80%]">${calculateTotal()}</p>
            </div>
           
          </div>

          <div className="mt-6">
            <label htmlFor="note" className="block text-sm font-medium text-gray-700">
              Note
            </label>
            <textarea
              id="note"
              rows={4}
              className="mt-1 block w-[50%] border border-gray-300 rounded-md shadow-sm p-2"
            ></textarea>
          </div>
          <h1 className="flex ml-[46%]">0/200</h1>

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
      </div>
    </div>
  );
};

export default Content;
