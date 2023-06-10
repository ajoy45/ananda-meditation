import { createBrowserRouter } from 'react-router-dom'
import MainLayOut from '../layouts/MainLayout'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import ErrorPage from '../pages/Errorpage/ErrorPage'
import Home from '../pages/Home/Home'

export const router = createBrowserRouter([
  // main layout
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
    //   {
    //     path: 'roomdetails/:id',
    //     element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
    //     loader:({params})=>getSingleRoom(params.id)
    //   },
    ]
  },
//   // login and signUp
//   {
//     path:'login',
//     element:<Login></Login>
//   },
//   {
//     path:'signup',
//     element:<SignUp></SignUp>
//   },
//   // dashboard layout
//   {
//     path:"dashboard",
//     element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
//     children:[
//       {
//         path:'/dashboard/add-room',
//         element:<AddRoom></AddRoom>
//       },
//       {
//         path:'/dashboard/my-bookings',
//         element:<MyBookings></MyBookings>
        
//       },
//       {
//         path:'/dashboard/my-listings',
//         element:<MyListings></MyListings>
        
//       }
//     ]
//   }
])
