import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import useMenu from "../../../hooks/useMenu";

const AdminManageItems = () => {
  const [menu, refetch] = useMenu();
  const axios = useAxios();

  // Handle Delete
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
        axios.delete(`/menu/${id}`).then((res) => {
          Swal.fire({
            title: "Deleted!",
            text: "Item has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };

  return (
    <div className="mt-7">
      {/* Section Title */}
      <SectionTitle
        header={"Hurry Up!"}
        miniHeader={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      {/* Table Container */}
      <div className="bg-white p-10 shadow-md rounded-lg">
        <h1 className="text-3xl mb-5 font-bold text-gray-800">
          Total Items: {menu?.length}
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse">
              {/* Table Head */}
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">No</th>
                  <th className="py-3 px-6 text-left">ITEM IMAGE</th>
                  <th className="py-3 px-6 text-left">ITEM NAME</th>
                  <th className="py-3 px-6 text-left">PRICE</th>
                  <th className="py-3 px-6 text-center">EDIT</th>
                  <th className="py-3 px-6 text-center">DELETE</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="text-gray-600 text-sm font-light">
                {menu?.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={item?.image}
                            alt="Item"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6">{item?.name}</td>
                    <td className="py-3 px-6">${item?.price}</td>
                    <td className="py-3 px-6 text-center">
                      <button className="text-blue-500 hover:text-blue-700 transition-all">
                        <FaEdit size={18} />
                      </button>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-500 hover:text-red-700 transition-all"
                      >
                        <RiDeleteBin6Fill size={18} />
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
