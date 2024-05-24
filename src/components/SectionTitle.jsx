import { HiTrash } from "react-icons/hi";
// import useitem from "../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import useMenu from "../Hooks/useMenu";


const SectionTitle = ({subHeading, heading}) => {
    const [menu] = useMenu()

    const handleUpdateItem = item => {
        console.log(item);
    }

    const handleDeleteItem = item => {
        console.log(item);
    }

    return (
        <div>
            <div className="mx-auto text-center w-4/12 my-8">
            <p className="text-yellow-500 mb-2">---{subHeading}---</p>
            <h1 className="text-4xl uppercase border-y-4 py-3">{heading}</h1>
        </div>
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
                                <th className="rounded-tr-2xl py-6 mb-24">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {menu.map((item, idx) => (
                                <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td><img className=" mask mask-squircle w-12 h-12" src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        
                                        <button
                                            onClick={() =>
                                                handleUpdateItem(item)
                                            }
                                            className="btn bg-orange-200"
                                        >
                                            <FaEdit className="text-2xl text-white  " />
                                        </button>
                                        
                                        
                                    </td>

                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDeleteItem(item)
                                            }
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

export default SectionTitle;