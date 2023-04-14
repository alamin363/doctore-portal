import React from "react";

const AppontmentOption = ({ apponment,setTreatment }) => {
  const { name, slots, price } = apponment;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center ">
        <h2 className="text-secondary text-bold text-2xl ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : " space"} available
        </p>
        <p>price: {price}</p>
        <div className="card-actions justify-center ">
          <label
          onClick={() => setTreatment(apponment,slots)}
            htmlFor="appointment-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppontmentOption;
