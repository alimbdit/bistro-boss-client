import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleUpdate = () => {};

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if(result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
            // console.log(res.data)
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        heading="MANAGE ALL ITEMS"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>Category</th>
              <th className="text-right">PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="food image" />
                      </div>
                    </div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(item)}
                    className="btn btn-ghost bg-orange-600 hover:bg-orange-500"
                  >
                    <BiEdit className="text-white text-xl"></BiEdit>
                  </button>
                </td>
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

export default ManageItems;
