import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";




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
        }
      ]
    },
  ]);