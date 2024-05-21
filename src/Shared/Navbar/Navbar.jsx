import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import useCarts from "../../Hooks/useCarts";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCarts()
    const handleLogOut = () => {
        logOut().then().catch();
    };
    const navOptions = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <a href="">Contact Us</a>
            </li>
            {/* <li>
                <a>Dashboard</a>
            </li> */}
            <li>
                <Link to="/menu">Our Menu</Link>
            </li>
            <li>
                <Link to="/signUp">Sign Up</Link>
            </li>

            <li>
                <Link to="/order/salad">Our Orders</Link>
            </li>
            
            {user ? (
                <>
                    
                    <li>
                        <NavLink to="dashboard/cart" className="btn text-2xl btn-ghost">
                        <HiOutlineShoppingCart />
                            <div className="badge badge-primary">+{cart.length}</div>
                        </NavLink>
                    </li>
                    <li>
                        <Link onClick={handleLogOut} className="">
                            Log Out
                        </Link>
                    </li>
                </>
            ) : (
                <>
                    {" "}
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </>
            )}
            
        </>
    );
    return (
        <div>
            <div className="navbar  fixed z-10 max-w-screen-2xl bg-black bg-opacity-30 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                    {user && <p>{user?.email}</p>}
                </div>
                <div className="navbar-center hidden lg:flex"></div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
