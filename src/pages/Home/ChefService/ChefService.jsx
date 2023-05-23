import chef from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${chef})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="my-24">
      {/* <div className="">
        <img src={chef} alt="" />

      </div> */}
      <div className="text-center   " style={backgroundImageStyle}>
        <div className="bg-neutral-800 bg-opacity-40 p-28">
          <div className="bg-white py-24 px-40">
            <h1 className="text-4xl font-medium uppercase mb-2">Bistro Boss</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
