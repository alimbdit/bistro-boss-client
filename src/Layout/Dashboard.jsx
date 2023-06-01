import { NavLink, Outlet } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { FaHome, FaCalendarAlt, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { CgMenuBoxed } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  // TODO: Load data from the server to have dynamic isAdmin based on Data

  // const isAdmin = true;
  



  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-5">
      <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome className="text-xl"></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils className="text-xl"></FaUtensils>{" "}
                  Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <TfiMenuAlt className="text-xl"></TfiMenuAlt> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook className="text-xl"></FaBook> Manage bookings
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers className="text-xl"></FaUsers> All Users
                </NavLink>
              </li>
              
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome className="text-xl"></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt className="text-xl"></FaCalendarAlt>{" "}
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <GiWallet className="text-xl"></GiWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <HiShoppingCart className="text-2xl"></HiShoppingCart> My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome className="text-xl"></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              {" "}
              <CgMenuBoxed className="text-xl"></CgMenuBoxed> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
