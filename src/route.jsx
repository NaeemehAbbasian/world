import App from "./App";
import HomePage from "./component/pages/HomePage.jsx";
import React from 'react';
import HomeLayout from "./component/pages/HomeLayout.jsx"
import Countries from "./component/pages/Countries.jsx";
import  CountryDetailPage  from "./component/pages/CountryDetailPage.jsx";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/countries", 
        element: <Countries />,
      },
      {
        path: "/countries/:name", 
        element: <CountryDetailPage />,
      },
    ],
  },
]);
export { router }; 