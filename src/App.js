import React, {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Body from "./components/Body/Body.js";
import About from "./components/AboutUs/About.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import NotFound from "./components/NotFound/NotFound.js";
import RestaurantMenu from './components/RestraurantMenu/RestaurantMenu.js';
// import Grocery from "./components/Grocery.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/grocery", element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense> },
      {path : "/restaurant/:resId" , element: <RestaurantMenu/>}
    ],
    errorElement: <NotFound />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
