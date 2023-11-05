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
        element: <AllFoodItems></AllFoodItems>
      },
      {
        path: 'profile',
        element: <UserProfile></UserProfile>
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
