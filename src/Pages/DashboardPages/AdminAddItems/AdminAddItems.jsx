import { useForm } from "react-hook-form";
import usePublicAxios from "../../../hooks/usePublicAxios";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;

const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;

const AdminAddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = usePublicAxios()

  const axios = useAxios()


  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = {image : data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile, {
        headers: {
            "content-type" : "multipart/form-data"
        }
    })

    console.log(res.data);

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }

      const res = await axios.post("/menu", menuItem)
      console.log(res.data);
      reset()
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Wow...",
          text: "Menu Item is Added Successfully!",
        });
      }


      // console.log(menuItem);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-black">
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Recipe name*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Recipe name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Price*</span>
            </label>
            <input
              type="text"
              {...register("price")}
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Category</span>
            </label>
            <select
              className="input input-bordered"
              {...register("category")}
              defaultValue={"default"}
              required
            >
              <option disabled value="default">Select a category</option>
              <option value="pizza">pizza</option>
              <option value="Salad">Salad</option>
              <option value="soups">soups</option>
              <option value="desserts">desserts</option>
              <option value="drinks">drinks</option>
            </select>
          </div>
        </div>

        <div className="form-control mt-6 space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Recipe Details*</span>
            </label>
            <textarea
              name="detailedDescription"
              {...register("recipe")}
              placeholder="Recipe Details..."
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              {...register("image")}
              className="file-input w-full max-w-xs"
            />
          </div>
          <input className="btn btn-primary" type="submit" value={"Add Item"} />
        </div>
      </form>
    </div>
  );
};

export default AdminAddItems;
