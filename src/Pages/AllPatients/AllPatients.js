import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";

const AllPatients = () => {
  const url = `https://healthcare-server-zeta.vercel.app/allPatients`;

  const {
    data: patients = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Patients"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://healthcare-server-zeta.vercel.app/patient/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            refetch();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h2 className="text-3xl">All Patients</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Meet With</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, i) => (
              <tr key={patient._id}>
                <th>{i + 1}</th>
                <td>{patient.patientname}</td>
                <td>{patient.email}</td>
                <td>{patient.drname}</td>

                <td>
                  <button
                    onClick={() => handleDelete(patient._id)}
                    className="btn btn-xs bg-red-500 border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPatients;
