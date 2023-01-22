import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { treatment_name, dr_name,price } = appointmentOption;
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold text-blue-600 text-center">
            {dr_name}
          </h2>
          <h3 className="text-xl font-semibold text-center">
            {treatment_name}
          </h3>
          
          <p>Price: ${price}</p>
          <div className="card-actions justify-center">
            <label
            
             onClick={()=>setTreatment(appointmentOption)}
              htmlFor="booking-modal"
              className="btn bg-gradient-to-br from-blue-600 to-cyan-200 text-white border-none transition-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            >
                
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    );
};

export default AppointmentOption;