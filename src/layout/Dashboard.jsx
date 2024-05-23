
import { FaBook, FaEnvelope, FaLiraSign, FaList, FaListAlt, FaListOl, FaListUl, FaShoppingBag, FaThList, FaUsers, FaUtensils } from "react-icons/fa";
import { HiCalendar, HiHome, HiMenu, HiShoppingCart } from "react-icons/hi";
import { HiCalendarDays, HiListBullet, HiOutlineArrowRightStartOnRectangle, HiStar, HiWallet } from "react-icons/hi2";
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from "../Hooks/useCarts";

const Dashboard = () => {
    const  [cart] = useCarts()

    // todo: get isAdmin value from the database;
    const isAdmin = true;


    return (
        <div className='flex max-w-screen-2xl mx-auto'>
            {/* DASHBOARD SIDEBAR */}
            <div className="w-64 min-h-screen bg-orange-200">
                <ul className="menu p-4 space-y-1">
                    {
                        isAdmin? 
                        <>
                        <li><NavLink to="/dashboard/adminHome"><HiHome/>   Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addItem"><FaUtensils />  Add Item</NavLink></li>
                    <li><NavLink to="/dashboard/manageItems"><FaListUl />manage Items</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><FaBook />Manage Bookings</NavLink></li>
                    <li><NavLink to="/dashboard/users"><FaUsers />All Users</NavLink></li>

                        </>
                        :
                        <>
                        <li><NavLink to="/dashboard/userHome"><HiHome/>   My Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><HiCalendar />   My Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/payment"><HiWallet />  Payment</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><HiShoppingCart />   My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><HiStar />  Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><HiCalendarDays />  Booking</NavLink></li>
                        </>
                    }
                    
                    <div className="divider"></div> 
                    <li><NavLink to="/"><HiHome/>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><HiMenu/>Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag/>Shop</NavLink></li>
                    <li><NavLink to="/order/salad"><FaEnvelope/>Contact</NavLink></li>
                </ul>
            </div>
            
        {/* DASHBOARD CONTENT */}
            <div className='flex-1 p-8'>
                    <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;