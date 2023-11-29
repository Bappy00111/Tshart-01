import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './component/Layout/Layout.jsx';
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Order from './component/Order/Order.jsx';
import Grandpa from './component/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('tsharts.json')
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
