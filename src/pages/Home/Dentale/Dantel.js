import React from "react";
import danteleImg from "../../../asset/assets/images/treatment.png";
const Dantel = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row lg:justify-around lg:mx-44 mt-14">
        <img
          src={danteleImg}
          className="lg:w-[448px] rounded-lg lg:h-[576px] shadow-2xl"
          alt=""
        />
        <div className="ml-24">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dantel;
