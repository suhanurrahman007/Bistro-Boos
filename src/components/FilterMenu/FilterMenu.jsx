import MenuItem from "../../Share/MenuItem/MenuItem";

const FilterMenu = ({filterItems}) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-5 md:mx-0">
        {filterItems.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    );
};

export default FilterMenu;