import useMenu from "../../Hooks/useMenu";
import useAuth from "../../Hooks/useAuth";

const FoodCard = ({ category }) => {
    const {user} = useAuth();
    console.log({user});
    const [menu] = useMenu();
    const food = menu.filter((item) => item.category == category);
    console.log(food);

    const handleOrder = (item) => {
        console.log(item, user);
    }

    return (
        <div className="grid grid-cols-3 gap-5 mx-24 justify-center my-16">
            {food.map((item) => (
                <div key={item._id} className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img src={item.image} alt="Shoes" />
                        <p className="absolute bg-gray-700 top-0 right-0 m-4 text-white p-2">${item.price}</p>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.recipe}</p>
                        <p>{item.category}</p>
                        
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => handleOrder(item)}>
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
