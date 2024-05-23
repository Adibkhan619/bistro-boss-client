import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "menu",
            element: <Menu></Menu>
        },
        {
            path: "/order/:category",
            element: <Orders></Orders>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "signUp",
            element: <SignUp></SignUp>
        },
        {
            path: "/secret",
            element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "cart",
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
            }
        ]
    }
  ]);