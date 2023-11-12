const OurShopCard = ({ item }) => {
  const { image, name, recipe } = item;
  console.log(item);
  return (
      <div className="card shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={image}
            alt="CaeserSalad"
            className="rounded-lg h-44 md:h-32  lg:h-48 w-full"
          />
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
