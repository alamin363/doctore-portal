import React from "react";
import BannerImg from "../../../asset/assets/images/chair.png";
import BannerbackgroundImg from "../../../asset/assets/images/bg.png";
import PrimaryButton from "../../../components/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt=""
        />
        {/* <div
          style={{
            background: `url(${BannerbackgroundImg})`,
          }}
        > */}
          <div className="relative">
          <img className="absolute top-[-150px] left-0" src={BannerbackgroundImg} alt="" />
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
         <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
export default Banner;
