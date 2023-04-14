import React from "react";
import cartImg1 from "../../../asset/assets/icons/clock.svg";
import cartImg2 from "../../../asset/assets/icons/marker.svg";
import cartImg3 from "../../../asset/assets/icons/phone.svg";
import CardInfo from "./CardInfo/CardInfo";
const carddetails = [
  {
    id: 1,
    img: cartImg1,
    color: "bg-gradient-to-r from-primary to-secondary",
    title: "Opening Hours",
    details: "Lorem Ipsum is simply dummy text of the pri",
  },
  {
    id: 2,
    img: cartImg2,
    color: "bg-accent",
    title: "Visit our location",
    details: "Brooklyn, NY 10036, United States",
  },
  {
    id: 3,
    img: cartImg3,
    color: "bg-gradient-to-r from-primary to-secondary",
    title: "Contact us now",
    details: "+000 123 456789",
  },
];
const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
      {carddetails.map(card => <CardInfo key={card.id} card={card}></CardInfo> )}
    </div>
)};

export default Card;
