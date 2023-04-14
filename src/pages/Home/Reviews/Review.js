import React from "react";

const Review = ({ review }) => {
  const { img, Name, details, Location } = review;
  return (
    <div className="card bg-base-100 shadow-xl m-3">
      <div className="card-body">
        <p>{details}</p>
        <div className="mt-9 flex items-center">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="ml-3.5">
            <h1>{Name}</h1>
            <p>{Location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
