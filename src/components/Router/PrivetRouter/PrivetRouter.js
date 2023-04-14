import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authProvider } from "../../Contex/ContextProvider";

const PrivetRouter = ({ children }) => {
  const { user ,loader} = useContext(authProvider);

  const location = useLocation();
  if (loader) {
    return <h1>Loading ...</h1>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRouter;
