import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../Share/MenuItem/MenuItem";

const Menu = () => {
  const [menu] = useMenu();
    const filterMenu = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <div>
        <SectionTitle
          header={"Check it out"}
          miniHeader={"FROM OUR MENU"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-5 md:mx-0">
        {filterMenu.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default Menu;