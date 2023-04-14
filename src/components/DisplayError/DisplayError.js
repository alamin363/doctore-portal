import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { authProvider } from "../Contex/ContextProvider";

const DisplayError = () => {
  const { LogOut } = useContext(authProvider);
  const navigate = useNavigate()
  const error = useRouteError();

  const handelSingOut = () => {
    LogOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error?.message));
  };
  return (
    <div className="flex align-middle justify-center flex-col">
      <p className="text-red-500">Something went wrong!!</p>
      <p className="text-center">

        <Link className="font-bold" to="/">Goto Home</Link>
      </p>
      <h4 className="text-3xl">
             
        
      </h4>
    </div>
  );
};

export default DisplayError;
