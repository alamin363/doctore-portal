import React from "react";
import icons from '../../../asset/assets/icons/quote.svg'
import people1 from "../../../asset/assets/images/people1.png"
import people2 from "../../../asset/assets/images/people2.png"
import people3 from "../../../asset/assets/images/people3.png"
import Review from "./Review";
const Reviews = () => {
  const reviews = [
    {
      _id:1,
      Name:"Winson Herry",
      img:people1,
      Location: "California",
      details:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
    {
      _id:2,
      Name:"Lalchan Badsha",
      img:people2,
      Location: "dhaka",
      details:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
    {
      _id:3,
      Name:"Robiul islam",
      img:people3,
      Location: "California",
      details:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
    },
  ]
  return (
    <section className="my-6 mx-14">
      <div className="flex justify-between">
      <div>
        <h3 className="text-primary text-xl">Testimonial</h3>
        <h1 className="text-3xl">What Our Patients Says</h1>
      </div>
      <img src={icons} className="w-20 lg:w-48" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {reviews.map(review => <Review key={review._id} review={review}></Review>)}
      </div>
    </section>
  );
};

export default Reviews;
