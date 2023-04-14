import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { authProvider } from "./components/Contex/ContextProvider";
import { router } from "./Routes/Routes/Routes";

function App() {
  const { DisplayMode } = useContext(authProvider);
  return (
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
  );
}

export default App;
