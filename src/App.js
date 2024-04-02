import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "./components/Header";
import { Body } from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ResInfo from "./components/ResInfo";
import { MenuAddition } from "./components/MenuAddition";

const App = () => {
  return (
    <div className="app">
      <Heading />
      <Outlet />
    </div>
  );
};

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResInfo />,
      },
      {
        path: "/add-menu",
        element: <MenuAddition />,
      },
    ],
  },
]);

const rendering = ReactDOM.createRoot(document.getElementById("root"));
rendering.render(<RouterProvider router={routing} />);
