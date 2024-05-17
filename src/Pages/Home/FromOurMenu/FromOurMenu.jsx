import { useEffect, useState } from "react";
import Menu from "../../../Shared/Menu/Menu";
import SectionTitle from "../../../components/SectionTitle";

const FormOurMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('../../../public/menu.json')
        .then(res => res.json())
        .then(data => {
            const menu = data.filter(item => item.category == "popular")
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
            <div className="grid lg:grid-cols-2 gap-5">
                 {
                menu.map(item => <Menu key={item._id} item={item}></Menu>)
                
                }
            </div>
           
        </div>
    );
};

export default FormOurMenu;