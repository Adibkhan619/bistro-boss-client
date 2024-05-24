import { FaEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import { HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    const [menu, , refetch] = useMenu();

    const handleUpdateItem = (item) => {
        console.log(item);
    };

    const handleDeleteItem = (item) => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                }
            }
        });
    };

    return (
        <div>
            <SectionTitle
                heading="manage all items"
                subHeading="hurry up"
            ></SectionTitle>

            {/* item table */}
            <div className="shadow-xl p-8 ">
                <table className="table  ">
                    {/* head */}
                    <thead className="rounded-xl my-10">
                        <tr className="bg-orange-200">
                            <th className="rounded-tl-2xl "></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th className="rounded-tr-2xl py-6 mb-24">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {menu.map((item, idx) => (
                            <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <img
                                        className=" mask mask-squircle w-12 h-12"
                                        src={item.image}
                                        alt=""
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button
                                            onClick={() =>
                                                handleUpdateItem(item)
                                            }
                                            className="btn bg-orange-200"
                                        >
                                            <FaEdit className="text-2xl text-white  " />
                                        </button>
                                    </Link>
                                </td>

                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn bg-red-400"
                                    >
                                        <HiTrash className="text-xl text-white" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
