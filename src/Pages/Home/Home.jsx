import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import MenuItem from "./FromOurMenu/FromOurMenu";
import FormOurMenu from "./FromOurMenu/FromOurMenu";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner></Banner>

            <Category></Category>
            <FormOurMenu category = "popular"></FormOurMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;
