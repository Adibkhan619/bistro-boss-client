import { useEffect, useState } from "react";

import SectionTitle from "../../../components/SectionTitle";

import SharedMenu from "../../../Shared/SharedMenu/SharedMenu";
import { Link } from "react-router-dom";

const FromOurMenu = ({category}) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('../../../public/menu.json')
        .then(res => res.json())
        .then(data => {
            const menu = data.filter(item => item.category == category)
            console.log(menu);
            setMenu(menu)
            console.log(data);
        })

}, [])

    return (
        <div className="mb-12">
            <SectionTitle 
                subHeading="Check it out"
                heading="From Our Menu"
            ></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-5 lg:mx-24 grid-rows-1 my -10">
                 {
                menu.map(item => <SharedMenu key={item._id} item={item}></SharedMenu>)
                
                }
            </div>
           <Link to ={`/order/${category}`}><button>Order Now!</button></Link>
        </div>
    );
};

export default FromOurMenu;