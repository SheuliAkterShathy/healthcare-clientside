import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const UpdateBooking = () => {
  const data = useLoaderData();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const drname = form.drname.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const updateBooking = {
      drname,
      phone,
      message,
    };

    fetch(`https://healthcare-server-zeta.vercel.app/update/${data?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking updated successfully");
          form.reset();
          navigate("/dashboard/dashboard/mybookings");
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="w-[70%] mx-auto">
      <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-3">
        <select name="drname" className="select select-bordered w-full">
          <option>Dr.Awal Hossain (Eye care)</option>
          <option>Dr.Taskin Chaula (Neuroligist)</option>
          <option>Dr.Zowa Islam (Orthopaedics)</option>
        </select>

        <input
          value={data.appointmentDate}
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
        <select disabled name="slot" className="select select-bordered w-full">
          <option>10:00am-10:30am</option>
          <option>10:30am-11:00am</option>
          <option>11:00am-11:30am</option>
          <option>11:30am-12:00pm</option>
          <option>12:30pm-1:00mm</option>
        </select>
        <input
          name="phone"
          type="text"
          defaultValue={data?.phone}
          placeholder="Your Phone"
          className="input input-bordered w-full"
        />
        <textarea
          name="message"
          type="text"
          defaultValue={data?.message}
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
  );
};

export default UpdateBooking;
