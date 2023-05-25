

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card rounded-none w-96 bg-base-100 shadow-xl">
          <figure className="h-[300px]">
            <img src={image} alt="food" className="h-full w-full bg-cover" />
            <p className="absolute top-5 right-5 px-2 py-1 bg-slate-900 text-white ">${price}</p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-2">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
              <button className="uppercase bg-neutral-100 rounded-lg border-b-4 border-b-amber-500 px-5 py-3 mt-6 text-lg font-medium hover:text-amber-500 hover:bg-neutral-800 duration-300">
                add to cart
              </button>
            </div>
          </div>
        </div>
    );
};

export default FoodCard;