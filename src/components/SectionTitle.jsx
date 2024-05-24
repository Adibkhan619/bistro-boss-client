
const SectionTitle = ({subHeading, heading}) => {
    
    return (
        <div>
            <div className="mx-auto text-center w-4/12 my-4">
            <p className="text-yellow-500 mb-2">---{subHeading}---</p>
            <h1 className="text-4xl uppercase border-y-4 py-3">{heading}</h1>
        </div>
       

        </div>
    );
};

export default SectionTitle;