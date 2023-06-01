import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        console.log(imageResponse);
        if(imageResponse.success){
            const imagUrl = imageResponse.data.display_url;
            const {category, name, price, recipe} = data;
            const newItem = { name, recipe,  image: imagUrl, category, price: parseFloat(price)};
            console.log(newItem)
            axiosSecure.post('/menu', newItem)
            .then(result => {
                console.log(result)
                if(result.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
           
            


        }

      });
  };

  return (
    <div>
      <SectionTitle
        subHeading="what's New"
        heading="Add An Item"
      ></SectionTitle>
      <div className="mx-10 p-5 bg-neutral-100 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Recipe name*
              </span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 80 })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full "
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex  gap-4 w-full my-3">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Category*
                </span>
              </label>
              <select
                defaultValue="Pic One"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Pick one</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="desi">Desi</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg font-semibold">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
              {errors.price && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Recipe Details*
              </span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
            {errors.details && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control w-full max-w-xs my-3">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Item Image*
              </span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <input className="btn btn-sm my-4" type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
