
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from "../../assets/menu/banner3.jpg"
// import SharedMenu from '../../Shared/SharedMenu/SharedMenu';
import FromOurMenu from '../Home/FromOurMenu/FromOurMenu';
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover image = {menuBanner} title ={"Today's Offer"}></Cover>
            <FromOurMenu category = "offered"></FromOurMenu>

            <Cover image = {dessertBg} title ={"Dessert"}></Cover>
            <FromOurMenu category = "dessert"></FromOurMenu>


            <Cover image = {pizzaBg} title ={"Pizza"}></Cover>
            <FromOurMenu category = "pizza"></FromOurMenu>

            <Cover image = {soupBg} title ={"Soup"}></Cover>
            <FromOurMenu category = "soup"></FromOurMenu>

            <Cover image = {saladBg} title ={"Salad"}></Cover>
            <FromOurMenu category = "salad"></FromOurMenu>
        </div>
    );
};

export default Menu;