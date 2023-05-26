import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
// import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="">
      <div className="my-16">
      {title && <Cover img={img} title={title}></Cover>}
      </div>
      <div className="grid md:grid-cols-2 gap-10 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4  duration-300 mt-4">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
