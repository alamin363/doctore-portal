import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../../../components/Contex/ContextProvider";
import Loading from "../../Share/Loading/Loading";

const MyAppoentment = () => {
  const { user } = useContext(authProvider);
  const url = `https://doctors-portal-server-alaminpk360.vercel.app/bookings?email=${user?.email}`;
  const {
    data: bookings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />
  }
  console.log(bookings);
  return (
    <div>
      <h1 className="text-3xl mb-5">My Appointment</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {" "}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td>{book.patient}</td>
                <td>{book.treatment}</td>
                <td>{book.appointmentDate}</td>
                <td>{book.slot}</td>
                {
                  book.price && !book.paid && <Link to={`/dashboard/payment/${book._id}`}>
                  <button className="btn btn-primary btn-sm">Pay</button>
                  </Link>
                }
                {
                  book.price && book.paid && <span className="text-green-500">paid</span>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoentment;
