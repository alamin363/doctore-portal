import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer/Footer';
import Navber from '../pages/Share/Navber/Navber';

const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;