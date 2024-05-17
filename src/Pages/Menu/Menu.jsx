
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBanner from "../../assets/menu/banner3.jpg"
import SharedMenu from '../../Shared/SharedMenu/SharedMenu';
import FormOurMenu from '../Home/FromOurMenu/FromOurMenu';
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
            <FormOurMenu category = "offered"></FormOurMenu>

            <Cover image = {dessertBg} title ={"Dessert"}></Cover>
            <FormOurMenu category = "dessert"></FormOurMenu>

            <Cover image = {pizzaBg} title ={"Pizza"}></Cover>
            <FormOurMenu category = "pizza"></FormOurMenu>

            <Cover image = {soupBg} title ={"Soup"}></Cover>
            <FormOurMenu category = "soup"></FormOurMenu>

            <Cover image = {saladBg} title ={"Salad"}></Cover>
            <FormOurMenu category = "salad"></FormOurMenu>
        </div>
    );
};

export default Menu;