import useMenu from "../../Hooks/useMenu";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const FoodCard = ({ category }) => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    console.log({ user });
    const [menu] = useMenu();
    const food = menu.filter((item) => item.category == category);
    // console.log(food);

    const handleAddToCart = (item) => {
        console.log(item, user);
        if (user && user.email) {
            // send cart item to database
            const cartItem = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                image: item.image,
                price: item.price,
            };
            // console.log(cartItem);

            axiosSecure.post("/carts", cartItem).then((res) => {
                console.log(res.data);
                if(res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
        } else {
            Swal.fire({
                title: "You are not Logged in",
                text: "Do you want to continue",
                icon: "warning",
                confirmButtonText: "Login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="grid grid-cols-3 gap-5 mx-24 justify-center my-16">
            {food.map((item) => (
                <div
                    key={item._id}
                    className="card w-full bg-base-100 shadow-xl"
                >
                    <figure>
                        <img src={item.image} alt="Shoes" />
                        <p className="absolute bg-gray-700 top-0 right-0 m-4 text-white p-2">
                            ${item.price}
                        </p>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.recipe}</p>
                        <p>{item.category}</p>

                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={() => handleAddToCart(item)}
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodCard;
