import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart)
const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BASE_URL}/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>

      <div className="uppercase  font-semibold h-[60px] flex justify-evenly items-center">
        <h2 className="text-3xl">Added Item: {cart.length}</h2>
        <h2 className="text-3xl">total Price Item: ${totalPrice}</h2>
        <button onClick={()=>navigate("/dashboard/payment")} disabled={cart.length === 0} className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto w-full pl-3">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="food image" />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-700 hover:bg-red-600"
                  >
                    <FaRegTrashAlt className="text-white text-xl"></FaRegTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
