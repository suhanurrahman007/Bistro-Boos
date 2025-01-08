import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [cart, refetch] = useCart();
  const axios = useAxios();

  const handleDelete = (id) => {
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
        axios.delete(`/cart/${id}`).then((res) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };

  return (
    <div className="mt-7">
      <SectionTitle
        header={"Hurry Up!"}
        miniHeader={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <div className="bg-white p-10 shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800">
            Total Items: {cart?.length}
          </h1>
          <div>
            {cart?.length ? (
              <Link to={"/dashboard/payment"}>
                <button className="btn btn-accent btn-outline">Pay</button>
              </Link>
            ) : (
              <button disabled className="btn btn-accent btn-outline">
                Pay
              </button>
            )}
          </div>
        </div>
        <div>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="table table-zebra w-full">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th>No</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, index) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="text-center">{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.image}
                              alt="Item"
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-gray-700 font-medium">{item?.name}</td>
                    <td className="text-gray-600 font-semibold">
                      ${item?.price?.toFixed(2)}
                    </td>
                    <td>
                      <button className="btn btn-outline btn-info btn-xs">
                        <FaEdit></FaEdit>
                      </button>
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-outline btn-error btn-xs"
                      >
                        <RiDeleteBin6Fill></RiDeleteBin6Fill>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
