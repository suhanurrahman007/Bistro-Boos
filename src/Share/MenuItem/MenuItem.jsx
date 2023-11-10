
const MenuItem = ({item}) => {
    const {name, image, price, recipe } = item;
    console.log(item);
    return (
      <div className="flex gap-4 mb-8">
        <div>
          <img style={{borderRadius : "0 200px 200px 200px"}} className="w-16 h-16" src={image} alt="" />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-justify">{name}-----------------</h2>
            <p className="text-lg text-orange-600 font-bold">${price}</p>
          </div>
          <p className="text-sm text-gray-600 text-justify">{recipe}</p>
        </div>
      </div>
    );
};

export default MenuItem;