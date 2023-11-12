import OurShopCard from "../Share/OurShopCard/OurShopCard";

const FilterShop = ({ filterItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {filterItems.map((item) => (
        <OurShopCard item={item} key={item._id}></OurShopCard>
      ))}
    </div>
  );
};

export default FilterShop;