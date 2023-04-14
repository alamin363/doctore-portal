import { createBrowserRouter } from "react-router-dom";
import AdminRouter from "../../../src/components/Router/AdminRouter/AdminRoute";
import DisplayError from "../../components/DisplayError/DisplayError";
import PrivetRouter from "../../components/Router/PrivetRouter/PrivetRouter";
import SineUp from "../../components/SineUp/SineUp";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import AllUser from "../../pages/Dashboard/AllUser/AllUser";
import ManageDoctors from "../../pages/Dashboard/ManageDoctores/ManageDoctors";
import MyAppoentment from "../../pages/Dashboard/MyAppoentment/MyAppoentment";
import Payment from "../../pages/Dashboard/Payment/Payment";
import DashboardLayout from "../../pages/DashboardLayout/DashboardLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError></DisplayError>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/appointment",
        element: (
          // <PrivetRouter>
          <Appointment />
          // </PrivetRouter>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <SineUp /> },

      { path: "*", element: <DisplayError> </DisplayError> },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: (
      // <PrivetRouter>
      <DashboardLayout></DashboardLayout>
      // </PrivetRouter>
    ),
    children: [
      { path: "/dashboard", element: <MyAppoentment /> },
      {
        path: "/dashboard/users",
        element: <AllUser />,
      },
      {
        path: "/dashboard/addDoctor",
        element: <AddDoctor></AddDoctor>,
      },
      {
        path: "/dashboard/managedoctors",
        element: <ManageDoctors></ManageDoctors>,
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-alaminpk360.vercel.app/bookings/${params.id}`
          ),
        element: <Payment></Payment>,
      },
    ],
  },
]);
