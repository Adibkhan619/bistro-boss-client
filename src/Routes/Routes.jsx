import { createBrowserRouter } from "react-router-dom";
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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "menu",
                element: <Menu></Menu>,
            },
            {
                path: "/order/:category",
                element: <Orders></Orders>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>,
            },
            {
                path: "/secret",
                element: (
                    <PrivateRoutes>
                        <Secret></Secret>
                    </PrivateRoutes>
                ),
            },
        ],
    },
    {
        path: "dashboard",
        element: (
            <PrivateRoutes>
                <Dashboard></Dashboard>
            </PrivateRoutes>
        ),
        children: [
            // * User Only Routes------->
            {
                path:'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: "cart",
                element: (
                    <PrivateRoutes>
                        <Cart></Cart>
                    </PrivateRoutes>
                ),
            },
            {
                path: "payment",
                element: (
                    <PrivateRoutes>
                        <Payment></Payment>
                    </PrivateRoutes>
                ),
            },
            {
                path: "paymentHistory",
                element: (
                    <PrivateRoutes>
                        <PaymentHistory></PaymentHistory>
                    </PrivateRoutes>
                ),
            },

            // *Admin only routes------------>
            {
                path: "users",
                element: (
                    <AdminRoutes>
                        <AllUsers></AllUsers>
                    </AdminRoutes>
                ),
            },
            {
                path: "addItems",
                element: (
                    <AdminRoutes>
                        <AddItems></AddItems>
                    </AdminRoutes>
                ),
            },
            {
                path: "manageItems",
                element: (
                    <AdminRoutes>
                        <ManageItems></ManageItems>
                    </AdminRoutes>
                ),
            },
            {
                path: "updateItem/:id",
                element: (
                    <AdminRoutes>
                        <UpdateItem></UpdateItem>
                    </AdminRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/menu/${params.id}`),
            },
            {
                path: "adminHome",
                element: (
                    <AdminRoutes>
                        <AdminHome></AdminHome>
                    </AdminRoutes>
                ),
            },
        ],
    },
]);
