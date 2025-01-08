/* eslint-disable no-unused-vars */
// ================= Client-Side Code =================
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import usePayment from "../../../hooks/usePayment";

const AdminManageItems = () => {
  const [payment, refetch] = usePayment();
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
        axios
          .delete(`/payment/${id}`)
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Payment has been deleted.",
              icon: "success",
            });
            refetch();
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete payment.",
              icon: "error",
            });
            console.error(error);
          });
      }
    });
  };

  return (
    <div className="mt-7">
      <h1 className="text-3xl mb-5 font-bold text-center text-indigo-600">
        Manage Payments
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-2xl mb-5 font-semibold text-gray-700 text-center">
          Total Payments: {payment?.length}
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse border border-gray-300">
              <thead className="bg-indigo-500 text-white">
                <tr>
                  <th className="py-2 px-4">No</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {payment?.map((item, index) => (
                  <tr
                    key={item._id}
                    className="odd:bg-gray-100 even:bg-gray-50 hover:bg-indigo-100"
                  >
                    <td className="py-2 px-4 text-center">{index + 1}</td>
                    <td className="py-2 px-4">{item?.email}</td>
                    <td className="py-2 px-4">${item?.price}</td>
                    {item?.status ? (
                      <td className="py-2 px-4 text-center text-green-600">
                        {item.status}
                      </td>
                    ) : (
                      <td className="py-2 px-4 text-center">"success"</td>
                    )}

                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-xs text-red-500 hover:text-red-700"
                      >
                        <RiDeleteBin6Fill />
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

export default AdminManageItems;
