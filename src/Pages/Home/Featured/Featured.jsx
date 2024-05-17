import SectionTitle from "../../../components/SectionTitle";
import img6 from "../../../assets/home/featured.jpg";
import './Featured.css';
const Featured = () => {
    return (
        <div  
            className="featured-img bg-fixed mt-24 py-24"
        >
        <div className="mb-16">
             <SectionTitle
                heading={"from our menu"}
                subHeading={"check it out"}
                className="mb-12"
            ></SectionTitle>
        </div>
           

            <div className="flex mx-24 gap-10 items-center bg-black bg-opacity-35 ">
                <img className="w-[400px]" src={img6} alt="" />
                <div className="text-white px-10">
                    <h1 className="text-xl">
                        March 20, 2023 <br />
                        WHERE CAN I GET SOME?
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Featured;
