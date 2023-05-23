import img from '../../assets/reservation/wood-grain-pattern-gray1x.png'

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
//   console.log(item);
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius: "0px 200px 200px 200px"}} className=" w-[118px]" src={img} alt="" />
      {/* <img className="rounded-[200px] rounded-ss-none w-[118px]" src={image} alt="" /> */}
      <div>
        <h3 className="text-xl uppercase">{name} ------------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-lg text-amber-500">${price}</p>
    </div>
  );
};

export default MenuItem;
