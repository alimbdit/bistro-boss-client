import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
            refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is Added as Admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleUserDelete = (user) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_BASE_URL}/users/delete/${user._id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        `${user.name} has been deleted from User List.`,
                        'success'
                      )
                }
        
            })
          
        }
      })
    
  };

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h1 className="text-3xl font-semibold my-4">All Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost bg-orange-600 hover:bg-orange-500"
                      >
                        <FaUserShield className="text-white text-xl"></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleUserDelete(user)}
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

export default AllUsers;
