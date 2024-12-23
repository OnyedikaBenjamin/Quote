

import React, {useState} from 'react';
import leadIcon from "./assets/Leading media.png";
import Icon from "./assets/Icon-right.png";
import Sign from "./assets/sign-doc.png";
import check from "./assets/Outer Rectangle.png";
import pencil from "./assets/pencil-edit.png";
import ConfirmationDialog from '../reuseable/confirmation';

const MultiStepFormPreview = () => {
  const itemsData = [
    {
      name: "Oxygen concentrator",
      variants: "Blue",
      quantity: "100 pieces",
      price: "$200.00",
      amount: "$2,000.00",
      expectedDeliveryDate: "2024-08-07",
      icon2: check,
      icon: leadIcon
    },
    {
      name: "Mechanical ventilator",
      variants: "NIL",
      quantity: "45 Kg",
      price: "$350.00",
      amount: "$2,500.00",
      expectedDeliveryDate: "2024-08-07",
      icon2: check,
      icon: leadIcon
    },
    {
      name: "Patient Monitor",
      variants: "Blue",
      quantity: "30 Units",
      price: "$300.00",
      amount: "$1,500.00",
      expectedDeliveryDate: "2024-08-07",
      icon2: check,
      icon: leadIcon
    },
    {
      name: "Mechanical ventilator",
      variants: "Blue",
      quantity: "35 Units",
      price: "$200.00",
      amount: "$1,500.00",
      expectedDeliveryDate: "2024-08-07",
      icon2: check,
      icon: leadIcon
    },
  ];
   
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleButtonClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };
  const calculateSubTotal = () => {
    return itemsData.reduce((acc, item) => acc + parseFloat(item.amount.replace('$', '')), 0);
  };

  const calculateTotal = () => {
    return calculateSubTotal(); 
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white border border-gray-200 rounded-lg">
  
      <div className="p-6 mb-4 border border-gray-200 rounded-lg">
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-bold">Request Information</h2>
         
          <img src={pencil} alt=""/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[15px] text-gray-500 mt-2">Title</p>
            <p className='mt-2'>RFQ No</p>
          </div>

          <div className=''>
           <p className="text-lg text-[#101928] mt-2">Request for Equipments</p>
            <p className='mt-2'>#RQ 01234</p>
          </div>
          <div>
            <p className="text-[16px] text-gray-500 mt-2">Requestor</p>
             
            <p className="text-sm text-gray-500 mt-2">Department</p>
            <p className="text-sm text-gray-500 mt-5">Expected delivery date</p>
          </div>


          <div>
          <div className="flex items-center space-x-2 mt-2">
            <div className="rounded-xl bg-[#ffece5] w-10 h-8 flex items-center justify-center">
            
                <p className="text-center">JD</p>
              </div>
                   <span>Jane Doe <span className="text-[#D9D9D9]">• Head Nurse, Paediatrics</span></span>
                 </div>
                 <p className=' mt-2'>Maternity</p>
                
                 <p className=' mt-2'>2024-12-02</p>
          </div>

          
        </div>
      </div>

     
      <div className="mb-4 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Item(s)</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F9FAFB] border-b">
              <th className="py-2 px-4 text-[#344054]">Items</th>
              <th className="py-2 px-4 text-[#344054]">Variants</th>
              <th className="py-2 px-4 text-[#344054]">Quantity</th>
              <th className="py-2 px-4 text-[#344054]">Price</th>
              <th className="py-2 px-4 text-[#344054]">Amount</th>
              <th className="py-2 px-4 text-[#344054]">Expected Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {itemsData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 flex items-center">
                  <div className="flex items-center space-x-2">
                    <img src={item.icon2} alt="item" className="w-6 h-6" />
                    <img src={item.icon} alt="item" className="w-8 h-6 rounded-full mr-2" />
                  </div>
                  <div className='ml-3'>
                    <p>{item.name} </p>
                    <p className="text-gray-500">#28373</p>
                  </div>
                </td>
                <td className="py-2 px-4">{item.variants}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.price}</td>
                <td className="py-2 px-4">{item.amount}</td>
                <td className="py-2 px-4">{item.expectedDeliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex mt-4 space-x-6">
          <div className="text-left ml-[67%]">
            <p>Sub Total</p>
            <p>Total</p>
          </div>
          <div className="text-left ml-[78%]">
            <p className="font-bold">${calculateSubTotal().toFixed(2)}</p>
            <p className="font-bold">${calculateTotal().toFixed(2)}</p>
          </div>
        </div>
      </div>

     
      <div className="mb-6 p-6 border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center">
          <img src={Sign} alt="" className="w-10" />
          <div className="flex-1 ml-4">
            <h3 className="text-2xl font-bold text-[#1D2739]">Terms and Attachments</h3>
            <p className="text-sm mt-2 text-[#475367]">Review payment and delivery terms</p>
          </div>
          <img src={Icon} alt="Icon" className="w-6 h-6" />
        </div>
      </div>

   
      <div className="flex justify-end space-x-4">
        <button className="border border-gray-300 py-2 px-4 rounded-lg text-gray-600">
          Cancel
        </button>
        <button className="border border-blue-600 py-2 px-4 rounded-lg text-blue-600">
          Save as draft
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={handleButtonClick}>
          Submit
        </button>
       
        {showConfirmation && (
        <ConfirmationDialog
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          message="You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client 'Westend Clear Hospital'. Are you sure you want to proceed?"
        />
      )}
      </div>
    </div>
  );
};

export default MultiStepFormPreview;
