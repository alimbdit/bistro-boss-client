
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
const [menu] = useMenu();

const popularItems = menu.filter((item) => item.category === "popular"); 

  // console.log(menu)
  return (
    <section className="mb-12">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="Popular Items"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4  duration-200 mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
