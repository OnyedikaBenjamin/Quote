
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./assets/Group.png";
import Dashboardlogo from "./assets/grid-2.png";
import Inventorylogo from "./assets/box.png";
import Procurementlogo from "./assets/cart.png";
import Communicationlogo from "./assets/chats.png";
import Subtractlogo from "./assets/Subtract.png";
import Calendarlogo from "./assets/icon.png";
import Settingslogo from "./assets/setting.png";
import Suppportlogo from "./assets/support.png";
import Solid from "./assets/Solid.png";
import barge from "./assets/Badge.png";
import image from "../features/assets/Image.png";
import signout from "../features/assets/sign-out.png";

const Sidebar = () => {
  const [isProcurementOpen, setIsProcurementOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleProcurement = () => {
    setIsProcurementOpen(!isProcurementOpen);
  };

  const toggleFinance = () => {
    setIsFinanceOpen(!isFinanceOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
     
      <button
        className="fixed top-4 left-4 z-50 block lg:hidden p-2 bg-gray-200 rounded-md"
        onClick={toggleSidebar}
      >
    
        <img src={Solid} alt="Toggle Menu" />
      </button>

     
      <div
        className={`sidebar bg-[#F7F9FC] shadow-md w-[250px] md:w-[300px] lg:w-[350px] h-screen fixed top-0 left-0 transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="sidebar-logo flex items-center py-4 bg-white">
          <img src={logo} alt="Logo" className="h-8 mr-2 px-6" />
          <div>
            <p className="text-[18px] font-bold text-[#141460]">
              Medical Advanced <br /> Platform
            </p>
          </div>
        </div>

        <nav className="sidebar-menu mt-6">
          <ul>
            <li className="menu-item active px-6 py-3 text-[#344054]">
              <Link to="/">
                <img src={Dashboardlogo} alt="dashboard" className="inline-block mr-3" /> Dashboard
              </Link>
            </li>
            <li className="menu-item px-6 py-3 text-[#344054]">
              <img src={Inventorylogo} alt="dashboard" className="inline-block mr-3" /> Inventory
            </li>
            <li
              className="menu-item px-6 py-3 bg-[#E3EAFB] shadow-md text-[#344054] flex justify-between items-center"
              onClick={toggleProcurement}
            >
              <div>
                <img src={Procurementlogo} alt="procurement" className="inline-block mr-3" /> Procurement
              </div>
              <img
                src={Solid}
                alt="arrow"
                className={`transform ${isProcurementOpen ? 'rotate-180' : ''}`}
              />
            </li>
            {isProcurementOpen && (
              <ul className="pl-12">
                <li className="submenu-item py-2 text-[#344054]">
                  <Link to="/quote-details">Quotes</Link>
                </li>
                <li className="submenu-item py-2 text-[#344054]">Orders</li>
              </ul>
            )}
            <li
              className="menu-item px-6 py-3 text-[#344054] flex justify-between items-center"
              onClick={toggleFinance}
            >
              <div>
                <img src={Dashboardlogo} alt="finance" className="inline-block mr-3" /> Finance
              </div>
              <img
                src={Solid}
                alt="arrow"
                className={`transform ${isFinanceOpen ? 'rotate-180' : ''}`}
              />
            </li>
            {isFinanceOpen && (
              <ul className="pl-12">
                <li className="submenu-item py-2 text-[#344054]">Budget</li>
                <li className="submenu-item py-2 text-[#344054]">Invoices</li>
              </ul>
            )}
            <li className="menu-item px-6 py-3 text-[#344054] flex justify-between items-center cursor-pointer">
              <div>
                <img src={Communicationlogo} alt="communication" className="inline-block mr-3" /> Communication
              </div>
              <img src={barge} alt="badge" />
            </li>
            <li className="menu-item px-6 py-3 text-[#344054] flex justify-between items-center">
              <div>
                <img src={Calendarlogo} alt="calendar" className="inline-block mr-3" /> Calendar
              </div>
              <img src={barge} alt="badge" />
            </li>
            <li className="menu-item px-6 py-3 text-[#344054]">
              <img src={Subtractlogo} alt="contracts" className="inline-block mr-3" /> Contracts
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer mt-auto">
          <ul className="mt-4">
            <li className="py-4 px-6">
              <img src={Suppportlogo} alt="support" className="inline-block mr-3" /> Support
            </li>
            <li className="py-6 px-6">
              <img src={Settingslogo} alt="settings" className="inline-block mr-3" /> Settings
            </li>
          </ul>

          <div className="flex items-center space-x-4 px-2">
            <div className="rounded-xl bg-[#ffece5] w-10 h-10 flex items-center justify-center">
              <img src={image} alt="Profile" />
            </div>

            <div className="flex flex-col">
              <span className="font-medium">Mark Benson</span>
              <p className="text-gray-500 text-sm">markbenson@coremed.com</p>
            </div>

           
            <img src={signout} alt="Sign Out" className="ml-4" />
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
