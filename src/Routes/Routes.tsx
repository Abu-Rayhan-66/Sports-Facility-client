import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "../Layouts/MainLayout/ProtectedRoute";



const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<ProtectedRoute>
              <AboutUs></AboutUs>
            </ProtectedRoute>
        },
        {
          path:"/contact",
            element:<ContactUs></ContactUs>
        },
        {
          path:"/login",
            element:<Login></Login>
        },
        {
          path:"/register",
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default Router