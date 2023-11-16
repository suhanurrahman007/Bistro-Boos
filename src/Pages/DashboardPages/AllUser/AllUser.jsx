import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUser = () => {
    const axios = useAxios()
    const {data, refetch} = useQuery({
        queryKey: ["user"],
        queryFn: async()=>{
            const res  = await axios.get("/user")
            return res.data
        }
    })

    const handleDelete =(id) =>{
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
              .delete(`/user/${id}`)
              .then((res) => {
                console.log(res.data);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                refetch()
              })
          }
        });




        console.log(id);
        
    }
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>

                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <FaEdit></FaEdit>
                    </button>
                  </th>

                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <RiDeleteBin6Fill></RiDeleteBin6Fill>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUser;