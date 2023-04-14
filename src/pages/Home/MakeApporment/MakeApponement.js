import React from "react";
import doctore from "../../../asset/assets/images/doctor-small.png";
import appointment from "../../../asset/assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
 
      }}
      className="mt-32"
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
        {/* lg:block md:block */}
          <img src={doctore} alt="" className="-mt-28 lg:w-1/2 rounded-lg" />
          <div>
            <h4 className="text-primary text-lg font-bold">Appointment</h4>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
