import React, { useState } from "react";
import AppontmentBanner from "../AppointmentBanner/AppontmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppontmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppontmentBanner>
      <AvailableAppointment 
      selectedDate={selectedDate}
      ></AvailableAppointment>
    </div>
  );
};

export default Appointment;
