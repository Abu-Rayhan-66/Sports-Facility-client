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
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import CreateFacility from "../Pages/Dashboard/CreateFacility/CreateFacility";
import AllFacility from "../Pages/Dashboard/AllFacility/AllFacility";
import BookingManagement from "../Pages/Dashboard/BookingManagement/BookingManagement";
import AddAdmin from "../Pages/Dashboard/AddAdmin/AddAdmin";
import Facility from "../Pages/Facility/Facility";
import FacilityDetails from "../Pages/FacilityDetails/FacilityDetails";
import Booking from "../Pages/Booking/Booking";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";



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
        },
        {
          path:"/facility",
            element:<Facility></Facility>
        },
        {
          path:"/facilityDetails/:id",
            element:<FacilityDetails></FacilityDetails>
        },
        {
          path:"/booking/:id",
            element:<Booking></Booking>
        },
        {
          path:"/payment/:id",
            element:<PaymentPage></PaymentPage>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"/dashboard/bookings",
          element:<MyBookings></MyBookings>
        },
        {
          path:"/dashboard/createFacility",
          element:<CreateFacility></CreateFacility>
        },
        {
          path:"/dashboard/allFacility",
          element:<AllFacility></AllFacility>
        },
        {
          path:"/dashboard/bookingManagement",
          element:<BookingManagement></BookingManagement>
        },
        {
          path:"/dashboard/addAdmin",
          element:<AddAdmin></AddAdmin>
        }
      ]
    }
  ]);

  export default Router