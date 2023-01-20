import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="h-[90vh]">
      <h3 className="text-3xl mt-12 mb-4 text-center">My Bookings</h3>
        <div className="text-center mb-5">
        <h4>Patient: {user?.displayName}</h4>
        <h4>Email: {user?.email}</h4>
        </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Dr_Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking?.drname}</td>
                  <td>{booking?.treatment}</td>
                  <td>{booking?.appointmentDate}</td>
                  <td>{booking?.slot}</td>
                  <td>Edit</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
