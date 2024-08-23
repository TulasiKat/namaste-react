import React, {lazy , Suspense , useContext, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Body from "./components/Body/Body.js";
import About from "./components/AboutUs/About.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import NotFound from "./components/NotFound/NotFound.js";
import RestaurantMenu from './components/RestraurantMenu/RestaurantMenu.js';
import UserContext from './utils/UserContext.js';
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
// import Grocery from "./components/Grocery.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [userName , setUserName] = useState("Tulasi Katukoju");


  return (
    <Provider store={appStore}>
<UserContext.Provider value={{loggedinUser: userName , setUserName : setUserName}}>
      <div className="app">  
        <Header />
      <UserContext.Consumer>
        {(data)=><h1>{data.loggedinUser}</h1>}
      </UserContext.Consumer>
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/cart", element: <Cart/> },
      { path: "/grocery", element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense> },
      {path : "/restaurant/:resId" , element: <RestaurantMenu/>}
    ],
    errorElement: <NotFound />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
