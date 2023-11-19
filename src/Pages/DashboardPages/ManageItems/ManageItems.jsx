import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [cart, refetch] = useCart();
  const axios = useAxios()
  //   console.log(cart);
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
        axios.delete(`/cart/${id}`)
        .then(res =>{
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

  };
  return (
    <div className="mt-7">
      <SectionTitle
        header={"Hurry Up!"}
        miniHeader={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <div className="bg-slate-100 p-10">
        <div className="flex justify-between">
          <h1 className="text-3xl mb-5 font-bold text-justify">
            Total Items : {cart?.length}
          </h1>
          <div>
            {cart?.length ? (
              <Link to={"/dashboard/payment"}>
                <button className="btn btn-accent">Pay</button>
              </Link>
            ) : (
              <button disabled className="btn btn-accent">
                Pay
              </button>
            )}
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
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
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.price}</td>
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
      </div>
    </div>
  );
};

export default ManageItems;
