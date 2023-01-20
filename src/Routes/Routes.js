import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import AllDoctors from "../Pages/AllDoctors/AllDoctors";
import AllPatients from "../Pages/AllPatients/AllPatients";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
         element: <Main></Main>,
        // errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/',
                 element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
           
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
        },


        {
            path:'/dashboard',
            element:<DashboardLayout></DashboardLayout>,
            // errorElement:<DisplayError></DisplayError>,
            children:[
                {
                    path:'dashboard/mybookings',
                    element:<MyBookings></MyBookings>
                },
                {
                    path:'/dashboard/allpatients',
                    element:<AllPatients></AllPatients>
                },
                {
                    path:'/dashboard/alldoctors',
                    element:<AllDoctors></AllDoctors>
                },
             
              
            ]
          }
])

export default router;