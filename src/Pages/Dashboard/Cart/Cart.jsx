import {

    HiTrash,

} from "react-icons/hi";
import useCarts from "../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`carts/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Price: {totalPrice}</h2>
                {cart.length? <Link to="/dashboard/payment">
                <button className="btn btn-primary">Pay</button>
                </Link>
                :
                <button className="btn btn-primary" disabled>Pay</button>
                }
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {cart.map((item, idx) => (
                                <tr key={item._id}>
                                    <td>{idx + 1}</td>

                                    <td>
                                        <div className="">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {item.name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">
                                            Desktop Support Technician
                                        </span>
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button
                                            onClick={() =>
                                                handleDelete(item._id)
                                            }
                                            className="btn btn-ghost btn-xs"
                                        >
                                            <HiTrash className="text-2xl text-red-500" />
                                            remove
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
