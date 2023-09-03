import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ListElectronics from "./components/electronics/listElectronics";
import { Login } from "./views/login/login";
library.add(faCheckSquare, faCoffee, faUser, faStar);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/store",
        element: <ListElectronics />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
