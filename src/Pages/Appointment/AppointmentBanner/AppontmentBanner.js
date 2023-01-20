import React from 'react';


import { DayPicker } from 'react-day-picker'

const AppontmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <header>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src='https://img.freepik.com/premium-photo/doctor-research-analysis-diagnose-checking-brain-testing-result-patient-medical-technology_34200-493.jpg?w=1380'
              className="lg:w-1/2 rounded-lg shadow-2xl" alt=""
            />
            <div className="shadow-md p-10 lg:mr-8">
              <DayPicker
               mode="single"
               selected={selectedDate}
               onSelect={setSelectedDate}
              />
  
            </div>
          </div>
        </div>
      </header>
    );
};

export default AppontmentBanner;