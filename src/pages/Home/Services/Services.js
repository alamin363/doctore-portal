import React from "react";
import img1 from "../../../asset/assets/images/fluoride.png";
import img2 from "../../../asset/assets/images/cavity.png";
import img3 from "../../../asset/assets/images/whitening.png";
import ServicesCard from "./ServicesCard/ServicesCard";
const servicesDetails = [
  {
    id: 1,
    img: img1,
    title: "Fluoride Treatment",
    details:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    id: 2,
    img: img2,
    title: "Teeth Whiteningn",
    details:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    id: 3,
    img: img3,
    title: "Cavity Filling",
    details:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
];
const Services = () => {
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-primary uppercase text-xl font-bold">
          Our Services
        </h3>
        <h2 className="text-2xl font-semibold">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[34px]">
        {servicesDetails.map((service) => (
          <ServicesCard key={service.id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
