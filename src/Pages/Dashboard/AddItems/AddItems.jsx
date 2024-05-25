import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()

    const onSubmit = async(data) => {
        console.log(data);
        // !upload image to imagebb and get a url ------>

        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            // * send the menu item data to server with image url->
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post("/menu", menuItem)
            console.log(menuRes.data);

            reset()
            // * show success popup->
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
}
    return (
        <div className="">
            <SectionTitle
                heading={"add an item"}
                subHeading={"what's new?"}
            ></SectionTitle>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-gray-100 mx-24 p-12"
            >
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Recipe Name*</span>
                    </div>
                    <input
                        {...register("name", {required: true})}
                        type="text"
                        placeholder="Recipe Name"
                        className="input w-full shadow-sm"
                    />
                </label>

                <div className="flex gap-6">
                    {/* !category */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue="default"
                            {...register("category", {required: true})}
                            className="select  w-full shadow-sm"
                        >
                            <option disabled value = "default">
                                Category
                            </option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Desert</option>
                            <option>Drinks</option>
                        </select>
                    </label>

                    {/* price */}

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input
                            {...register("price", {required: true})}
                            type="number"
                            placeholder="Price"
                            className="input  w-full shadow-sm"
                        />
                    </label>
                </div>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea
                        {...register("recipe", {required: true})}
                        className="textarea  h-48 shadow-sm"
                        placeholder="Details"
                    ></textarea>
                </label>

                
        <div>
            <input {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
        </div>
                <button type="submit" className="btn-wide btn bg-orange-300 text-lg"><FaUtensils></FaUtensils>Add Item</button>
            </form>
        </div>
    );
};

export default AddItems;
