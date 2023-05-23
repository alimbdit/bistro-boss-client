import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import cardImg from "../../../assets/home/slide1.jpg";

const Recommends = () => {
  return (
    <section className="my-20">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="md:flex justify-around">
        <div className="card rounded-none w-96 bg-base-100 shadow-xl">
          <figure className="h-[300px]">
            <img src={cardImg} alt="Shoes" className=" w-full bg-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-2">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="uppercase bg-neutral-100 rounded-lg border-b-4 border-b-amber-500 px-5 py-3 mt-6 text-lg font-medium hover:text-amber-500 hover:bg-neutral-800 duration-300">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card rounded-none w-96 bg-base-100 shadow-xl">
          <figure className="h-[300px]">
            <img src={cardImg} alt="Shoes" className=" w-full bg-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-2">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="uppercase bg-neutral-100 rounded-lg border-b-4 border-b-amber-500 px-5 py-3 mt-6 text-lg font-medium hover:text-amber-500 hover:bg-neutral-800 duration-300">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card rounded-none w-96 bg-base-100 shadow-xl">
          <figure className="h-[300px]">
            <img src={cardImg} alt="Shoes" className=" w-full bg-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-2">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="uppercase bg-neutral-100 rounded-lg border-b-4 border-b-amber-500 px-5 py-3 mt-6 text-lg font-medium hover:text-amber-500 hover:bg-neutral-800 duration-300">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
