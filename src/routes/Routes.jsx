import { createBrowserRouter } from 'react-router-dom'
import MainLayOut from '../layouts/MainLayout'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import ErrorPage from '../pages/Errorpage/ErrorPage'
import Home from '../pages/Home/Home'
import DashboardLayout from '../layouts/DashboardLayout'
import AddClass from '../components/Dashboard/AddClass'

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
    ]
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'/dashboard/add-class',
        element:<AddClass></AddClass>
      }
    ]
  }

])
