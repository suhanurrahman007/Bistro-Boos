import FilterMenu from "../../../components/FilterMenu/FilterMenu";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

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
      <FilterMenu filterItems={filterMenu}></FilterMenu>
    </section>
  );
};

export default Menu;
