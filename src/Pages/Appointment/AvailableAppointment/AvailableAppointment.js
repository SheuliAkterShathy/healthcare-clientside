import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);

   const date = format(selectedDate, 'PP')


   const {data: appointmentOptions = [],refetch, isLoading} = useQuery({
    queryKey:['AppointmentOptions', date],
    queryFn: async() => {
      const res = await fetch(`http://localhost:5000/appointmentOptions`);
      const data = await res.json();
      return data
    }
   })

   if(isLoading){
      return <Loading></Loading>
   }
    return (
        <section className='my-20'>
        <p className='text-blue-700 text-center font-bold text-xl mb-9'>Available Appointments on {format(selectedDate, 'PP')}</p>

        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            appointmentOptions.map(option=><AppointmentOption 
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
            ></AppointmentOption>)
          }
        </div>
        { treatment && <BookingModal treatment={treatment} 
        selectedDate={selectedDate}
        setTreatment={setTreatment}
        refetch={refetch}
         ></BookingModal>}
    </section>
    );
};

export default AvailableAppointment;
