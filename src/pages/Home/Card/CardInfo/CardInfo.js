import React from "react";

const CardInfo = ({card}) => {
  const {details,title,color,img,} = card;
  return (
    <div className={`card md:card-side text-white ${color} shadow-xl p-6`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default CardInfo;
