
const Menu = ({item}) => {
    const {name, price, category, image, recipe, _id} = item;
console.log(item);
    return (
        <div className="flex  gap-5 justify-start items-start">
            <img className="w-24" style={{borderRadius:' 0 200px 200px 200px' }} src={image} alt="" />
            <div >
                <h1 className="text-2xl">{name}------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default Menu;