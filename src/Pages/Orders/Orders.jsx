import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover/Cover";
import orderBanner from "../../assets/shop/banner2.jpg";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const Orders = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const {category} = useParams()
    console.log(menu);
    return (
        <div>
            <Cover image={orderBanner} title="Our Orders"></Cover>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList className="mx-24 flex justify-center mt-24 gap-5">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <FoodCard category="salad"></FoodCard>
                </TabPanel>
                <TabPanel>
                    <FoodCard category="pizza"></FoodCard>
                </TabPanel>
                <TabPanel>
                    <FoodCard category="soup"></FoodCard>
                </TabPanel>
                <TabPanel>
                    <FoodCard category="dessert"></FoodCard>
                </TabPanel>
                <TabPanel>
                    <FoodCard category="drinks"></FoodCard>
                </TabPanel>
             
            </Tabs>
        </div>
    );
};

export default Orders;
