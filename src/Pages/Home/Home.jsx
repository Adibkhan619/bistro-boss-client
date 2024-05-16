import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-3xl">This is Home</h1>
            <Category></Category>
        </div>
    );
};

export default Home;