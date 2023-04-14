import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../../pages/Share/Loading/Loading";
import { authProvider } from "../../Contex/ContextProvider";
import useAdmin from "../../Hooks/useAdmin";

const AdminRouter = ({ children }) => {
  const { user, loader } = useContext(authProvider);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)

  const location = useLocation();
  if (loader || isAdminLoading) {
    return <Loading />;
  }
  if (user && isAdmin){
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
