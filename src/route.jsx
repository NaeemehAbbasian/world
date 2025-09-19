import App from "./App";
import HomePage from "./component/pages/HomePage.jsx";
import React from 'react';
import HomeLayout from "./component/pages/HomeLayout.jsx"
import Countries from "./component/pages/Countries.jsx";
import AboutUs from "./component/pages/AboutUs.jsx"; 
import Hotels from "./component/pages/Hotels.jsx"
import ContactUs from "./component/pages/ContactUs.jsx"
import  CountryDetailPage  from "./component/pages/CountryDetailPage.jsx";
import { createBrowserRouter } from "react-router";
import './index.css';


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
        path: "about-us",
        element: <AboutUs />,
      },{
        
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "hotels",
        element: <Hotels />, 
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