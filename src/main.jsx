import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './mainLayout/MainLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import AllFoodItems from './pages/AllFoodItems';
import UserProfile from './users/UserProfile';
import Login from './users/Login';
import Error from './pages/Error';
import AuthProvider from './providers/AuthProvider';
import Register from './users/Register';
import PrivateRoute from './routes/PrivateRoute';
import AddItems from './users/AddItems';
import AddedItems from './users/AddedItems';
import OrderedItems from './users/OrderedItems';
import UpdatedItems from './Extra/UpdatedItems';
import ShowSingleProduct from './Extra/ShowSingleProduct';
import MyCart from './pages/MyCart';
import PurchasePage from './pages/PurchasePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'allfooditems',
        element: <AllFoodItems></AllFoodItems>,
        loader: () => fetch('http://localhost:3000/allfoods'),


      },
      {
        path: 'profile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,

      },
      {
        path: '/additems',
        element: <PrivateRoute><AddItems></AddItems></PrivateRoute>,


      },
      {
        path: '/addeditems',
        element: <AddedItems></AddedItems>,
        loader: () => fetch('http://localhost:3000/additems'),

      },
      {
        path: '/singleproduct/:id',
        element: <ShowSingleProduct></ShowSingleProduct>,
        loader: ({ params }) => fetch(`http://localhost:3000/allfoods/${params.id}`),
      },
      {
        path: '/updateditems/:id',
        element: <UpdatedItems></UpdatedItems>,
        loader: ({ params }) => fetch(`http://localhost:3000/additems/${params.id}`),

      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>,
        loader: () => fetch('http://localhost:3000/mycart'),
      },
      {
        path: '/ordereditems',
        element: <OrderedItems></OrderedItems>

      },
      {
        path: '/purchasepage',
        element: <PurchasePage></PurchasePage>,
        // loader: () => fetch('http://localhost:3000/itemList')
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ],

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div  >
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
