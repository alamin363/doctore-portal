import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Share/Loading/Loading";
import ApponintmentModal from "./ApponintmentModal";
import AppontmentOption from "./AppontmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  // new react query
  const {
    data: AppointmentOptint = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointment", date],
    queryFn: () =>
      fetch(
        `https://doctors-portal-server-alaminpk360.vercel.app/appointment?date=${date}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }
  //  console.log(AppointmentOptint.data);
  return (
    <div className="my-16">
      <h1 className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {AppointmentOptint?.legth &&
          AppointmentOptint.map((apponment) => (
            <AppontmentOption
              key={apponment?._id}
              apponment={apponment}
              setTreatment={setTreatment}
            />
          ))}
      </div>
      {treatment && (
        <ApponintmentModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
