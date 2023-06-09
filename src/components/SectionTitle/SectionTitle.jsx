

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            <p className="text-amber-500 text-xl mb-2">--- {subHeading} ---</p>
            <h1 className="text-3xl uppercase border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;