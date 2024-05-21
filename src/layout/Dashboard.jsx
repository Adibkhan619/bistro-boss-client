
import { HiCalendar, HiHome, HiMenu, HiShoppingCart } from "react-icons/hi";
import { HiCalendarDays, HiOutlineArrowRightStartOnRectangle, HiStar, HiWallet } from "react-icons/hi2";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/* DASHBOARD SIDEBAR */}
            <div className="w-64 min-h-screen bg-orange-200">
                <ul className="menu p-4 space-y-1">
                    <li><NavLink to="/dashboard/userHome"><HiHome/>   My Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><HiCalendar />   My Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/payment"><HiWallet />  Payment</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><HiShoppingCart />   My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><HiStar />  Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/bookings"><HiCalendarDays />  Booking</NavLink></li>
                    <div className="divider"></div> 
                    <li><NavLink to="/"><HiHome/>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><HiMenu/>Menu</NavLink></li>
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