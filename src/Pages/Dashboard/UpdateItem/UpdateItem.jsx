import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

const UpdateItem = () => {
    const item = useLoaderData()
    console.log(item);
    return (
        <div>
            <SectionTitle heading="Update Item" subHeading="Update item here"></SectionTitle>
        </div>
    );
};

export default UpdateItem;