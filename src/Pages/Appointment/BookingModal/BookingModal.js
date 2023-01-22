import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate,setTreatment,refetch }) => {
    const { treatment_name,dr_name} = treatment; 
    const date = format(selectedDate, "PP");
    const {user} = useContext(AuthContext);


    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const drname = form.drname.value;
        const patientname = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
    
        
        const booking = {
            drname,
            appointmentDate: date,
            // treatment: treatment_name,
            patientname,
            slot,
            email,
            phone,
            message
        }
    console.log(booking)
        fetch('https://healthcare-server-zeta.vercel.app/bookings',{
          method:'POST',
          headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data =>{
          console.log(data)
          if(data.acknowledged){
            setTreatment(null)
            toast.success('Booking Confirmed successfully');
            refetch()
          }
          else{
            toast.error(data.message)
            console.log(data.error)
          }
        })
      }


    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
  
            <h3 className="text-lg font-bold">{treatment_name}</h3>
  
            <form onSubmit={handleBooking}  className="grid grid-cols-1 gap-3 mt-3">
            <input
                name="drname"
                type="text"
                value={dr_name}
                disabled
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                value={date}
                type="text"
                disabled
                className="input input-bordered w-full"
              />

              <input
                name="name"
                type="text"
                disabled
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
              <input
                name="email"
                type="email"
                disabled
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
                            <select name="slot" className="select select-bordered w-full">
               <option>10:00am-10:30am</option>
               <option>10:30am-11:00am</option>
               <option>11:00am-11:30am</option>
               <option>11:30am-12:00pm</option>
               <option>12:30pm-1:00mm</option>
              </select>
              <input
                name="phone"
                type="text"
                placeholder="Your Phone"
                className="input input-bordered w-full"
              />
              <textarea
                name="message"
                type="text"
                placeholder="Your message"
                className="input input-bordered w-full"
              />
              
              
              <input
                className="bg-blue-500 cursor-pointer p-3 rounded-md hover:bg-cyan-600"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </>
    );
};

export default BookingModal;
