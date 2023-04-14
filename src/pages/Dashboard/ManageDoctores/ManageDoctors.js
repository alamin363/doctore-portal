import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../Share/Loading/Loading";
import DeletDoctorModal from "./DeleteDoctor/DeletDoctorModal";

const ManageDoctors = () => {
  const [closeModal, setCloseModal] = useState(null);

  const closeModals = () => {
    setCloseModal(null);
  };

  const { data: doctorData, isLoading, refetch } = useQuery({
    queryKey: ["manageDoctor"],
    queryFn: () =>
      fetch("https://doctors-portal-server-alaminpk360.vercel.app/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  const handelDelete = (data) => {
    console.log(data)
    fetch(`https://doctors-portal-server-alaminpk360.vercel.app/doctors/${data._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json()).then(data => {
     if (data.deletedCount > 0) {
      refetch()
     }
    })
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctorData.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="w-24 rounded-full">
                    <img src={doctor.Img_url} alt="" />
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>
                  <label
                    onClick={() => setCloseModal(doctor)}
                    htmlFor="my-modal"
                    className="btn"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {closeModal && (
        <DeletDoctorModal
          closeModals={closeModals}
          message={`confirm you delete this ${closeModal.name}`}
          closeModal={closeModal}
          handelDelete={handelDelete}
        ></DeletDoctorModal>
      )}
    </div>
  );
};

export default ManageDoctors;
