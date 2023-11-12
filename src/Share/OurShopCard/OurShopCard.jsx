const OurShopCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
      <div className="card shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={image}
            alt="CaeserSalad"
            className="rounded-lg h-44 md:h-32  lg:h-48 w-full relative"
          />
          <p className="absolute right-7 top-7 bg-black text-white px-4 py-2 text-xs font-bold">${price}</p>
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-secondary border-0 border-b-4">
              add to cart
            </button>
          </div>
        </div>
      </div>
  );
};

export default OurShopCard;
