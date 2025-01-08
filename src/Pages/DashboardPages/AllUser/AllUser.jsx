import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUser = () => {
  const axios = useAxios();
  const { data, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("/user");
      return res.data;
    },
  });

  const handleAdmin = (id) => {
    axios.patch(`/user/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Admin!",
          text: "Admin Create Successfully.",
          icon: "success",
        });
      }
    });
  };

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
        axios.delete(`/user/${id}`).then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };

  return (
    <div className="mt-7 p-5 bg-slate-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-5 text-center">Manage Users</h1>
      <div className="overflow-x-auto rounded-lg">
        <table className="table w-full border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border border-gray-300">No</th>
              <th className="p-3 border border-gray-300">NAME</th>
              <th className="p-3 border border-gray-300">EMAIL</th>
              <th className="p-3 border border-gray-300">ROLE</th>
              <th className="p-3 border border-gray-300">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="p-3 border border-gray-300">{item?.name}</td>
                <td className="p-3 border border-gray-300">{item?.email}</td>
                <td className="p-3 border border-gray-300 text-center">
                  {item?.role === "admin" ? (
                    <span className="text-green-500 font-semibold">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleAdmin(item._id)}
                      className="btn btn-outline btn-success btn-xs"
                    >
                      <FaEdit />
                    </button>
                  )}
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-outline btn-error btn-xs"
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
  );
};

export default AllUser;
