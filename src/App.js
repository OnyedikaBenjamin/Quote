
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import QuoteDetails from './components/quote/QuoteDetails'; 
import Homepage from './components/quote/Homepage';

function App() {
  return (
    <Router>
        <div className="">
          <Routes>
            
            <Route path="/" element={<Homepage />} />
            <Route path="/quote-details" element={<QuoteDetails />} />
            
          </Routes>
        </div>
      
    </Router>
  );
}

export default App;

