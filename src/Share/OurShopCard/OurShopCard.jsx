import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import {  useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

const OurShopCard = ({ item }) => {
  const {_id, image, name, recipe, price } = item;

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();
  const axios = useAxios()

  const [data, refetch] = useCart()
  console.log(data);


  const handleCart = () => {
    if (user && user.email) {
      const cart = {
        menu_Id: _id,
        name,
        image,
        price,
        email : user.email
      };
      axios.post("/cart", cart)
      .then(res =>{
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "woe...",
            text: "Add Cart SuccessFull......!!",
          });
          refetch()
        }
      })

      // console.log(user.email);
    } else {
      Swal.fire({
        title: "Plz Login",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login plz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }

  };
  return (
    <div className="card shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt="CaeserSalad"
          className="rounded-lg h-44 md:h-32  lg:h-48 w-full relative"
        />
        <p className="absolute right-7 top-7 bg-black text-white px-4 py-2 text-xs font-bold">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleCart}
            className="btn btn-outline btn-secondary border-0 border-b-4"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurShopCard;
