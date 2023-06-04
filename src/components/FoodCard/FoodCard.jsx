import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const {user} = useContext(AuthContext);
  const [, refetch] = useCart()
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    // const {_id, name, image, price} = item;
    console.log(item);
    if(user && user.email){
      const orderItem = {menuItemId: _id, name, image, price, email:user.email }
      fetch(`${import.meta.env.VITE_BASE_URL}/carts`, {
        method: "POST",
        headers: {
          "content-type" : "application/json",
        },
        body: JSON.stringify(orderItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch()  //& refetch cart to update the number of items in the cart
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Food added on the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else {
      Swal.fire({
        title: "Please login to order the food",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }
    
  };

  return (
    <div className="card rounded-none w-96 bg-base-100 shadow-xl">
      <figure className="h-[300px]">
        <img src={image} alt="food" className="h-full w-full bg-cover" />
        <p className="absolute top-5 right-5 px-2 py-1 bg-slate-900 text-white ">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl mb-2">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="uppercase bg-neutral-100 rounded-lg border-b-4 border-b-amber-500 px-5 py-3 mt-6 text-lg font-medium hover:text-amber-500 hover:bg-neutral-800 duration-300"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
