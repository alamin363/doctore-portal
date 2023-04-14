import React from 'react';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Dantel from './Dentale/Dantel';
import MakeAppointment from './MakeApporment/MakeApponement';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner />
      <Card />
      <Services />
      <Dantel />
      <MakeAppointment />
      <Reviews />
    </div>
  );
};

export default Home;