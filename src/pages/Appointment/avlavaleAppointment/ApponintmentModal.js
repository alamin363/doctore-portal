import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authProvider } from "../../../components/Contex/ContextProvider";

const ApponintmentModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name:treatmentName ,price, slots } = treatment;
  const { user } = useContext(authProvider);
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      email,
      number,
      slot,
      price
    };
    //ToDo send data to the server
    fetch("https://doctors-portal-server-alaminpk360.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        setTreatment(null);
        if (data.data?.acknowledged) {
          toast.success("Booking confirm");
          refetch()
        }else{
          toast.error(data.message)
        }
      });
    // And once datsa is saved then close the modal

    // And display to success tost
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-6 mt-6"
          >
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              defaultValue={date}
              readOnly
            />
            <select name="slot" id="" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="name"
              className="input input-bordered w-full"
              name="name"
            />
            <input
              type="text"
              defaultValue={user ? user?.phoneNumber : null}
              placeholder="number"
              className="input input-bordered w-full"
              name="number"
            />
            <input
              type="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              name="email"
            />

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApponintmentModal;
