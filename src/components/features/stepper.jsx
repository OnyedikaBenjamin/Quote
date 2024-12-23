


import React, { useState } from 'react';
import RequestInformation from './content';
import TermsAndAttachments from './terms';
import ProgressIndicator from '../reuseable/progressIndicator';
import Preview from "../features/preview";
import Constant from '../reuseable/constant';
import Sidebar from './sidebar';
import Quoteb from '../reuseable/quoteb';

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row">
     
      <div className="lg:w-1/4 w-full lg:flex-shrink-0">
        <Sidebar />
      </div>

  
      <div className="lg:w-3/4 w-full px-4 sm:px-6">
      
        <Constant />

      
        <div className="mt-5">
          <Quoteb />
        </div>

       
        <div className="mt-5">
          <ProgressIndicator activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>

      
        <div className="w-full bg-white p-6 mt-5">
          {activeStep === 1 && <RequestInformation />}
          {activeStep === 2 && <TermsAndAttachments />}
          {activeStep === 4 && <Preview />}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
