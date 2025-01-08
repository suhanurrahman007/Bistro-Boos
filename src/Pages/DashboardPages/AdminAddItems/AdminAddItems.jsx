import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const AdminAddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axios = useAxios();

  const onSubmit = async (data) => {
    try {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: data.image,
      };

      const response = await axios.post("/menu", menuItem);
      reset();

      if (response.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Menu Item is Added Successfully!",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Menu Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Recipe name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="text"
              {...register("price")}
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("category")}
              defaultValue={"default"}
              required
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="pizza">Pizza</option>
              <option value="Salad">Salad</option>
              <option value="soups">Soups</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Image URL*</span>
            </label>
            <input
              type="url"
              {...register("image")}
              placeholder="Recipe image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe")}
            placeholder="Recipe Details..."
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <input
            className="btn btn-primary px-10 py-3 text-lg font-semibold"
            type="submit"
            value={"Add Item"}
          />
        </div>
      </form>
    </div>
  );
};

export default AdminAddItems;
