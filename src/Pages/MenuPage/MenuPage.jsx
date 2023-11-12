import CoverTitle from "../../components/CoverTitle";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import ViewFullMenuBtn from "../../components/ViewFullMenuBtn";

import img1 from "../../assets/menu/banner3.jpg"
import img2 from "../../assets/menu/dessert-bg.jpeg";
import img3 from "../../assets/menu/pizza-bg.jpg";
import img4 from "../../assets/menu/salad-bg.jpg";
import img5 from "../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet";





const MenuPage = () => {
    const [menu] = useMenu();
    const offered = menu.filter((item) => item.category === "offered");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");

    return (
      <div className="space-y-8">
        <Helmet>
            <title>Bistro Boss - Menu</title>
        </Helmet>
        <div className="space-y-7">
          <CoverTitle
            coverHeader={"OUR MENU"}
            coverBody={"Would you like to try a dish?"}
            coverImg={img1}
          ></CoverTitle>
          <SectionTitle
            miniHeader={"TODAY'S OFFER"}
            header={"Don't miss "}
          ></SectionTitle>
          <FilterMenu filterItems={offered}></FilterMenu>
          <ViewFullMenuBtn
            viewFullMenuBtn={"ORDER YOUR FAVOURITE FOOD"}
          ></ViewFullMenuBtn>
        </div>
        <div className="space-y-7">
          <CoverTitle
            coverHeader={"DESSERTS"}
            coverBody={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            coverImg={img2}
          ></CoverTitle>
          <FilterMenu filterItems={dessert}></FilterMenu>
          <ViewFullMenuBtn
            viewFullMenuBtn={"ORDER YOUR FAVOURITE FOOD"}
          ></ViewFullMenuBtn>
        </div>
        <div className="space-y-7">
          <CoverTitle
            coverHeader={"PIZZA"}
            coverBody={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            coverImg={img3}
          ></CoverTitle>
          <FilterMenu filterItems={pizza}></FilterMenu>
          <ViewFullMenuBtn
            viewFullMenuBtn={"ORDER YOUR FAVOURITE FOOD"}
          ></ViewFullMenuBtn>
        </div>
        <div className="space-y-7">
          <CoverTitle
            coverHeader={"SALADS"}
            coverBody={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            coverImg={img4}
          ></CoverTitle>
          <FilterMenu filterItems={salad}></FilterMenu>
          <ViewFullMenuBtn
            viewFullMenuBtn={"ORDER YOUR FAVOURITE FOOD"}
          ></ViewFullMenuBtn>
        </div>
        <div className="space-y-7">
          <CoverTitle
            coverHeader={"SOUP"}
            coverBody={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            coverImg={img5}
          ></CoverTitle>
          <FilterMenu filterItems={soup}></FilterMenu>
          <ViewFullMenuBtn
            viewFullMenuBtn={"ORDER YOUR FAVOURITE FOOD"}
          ></ViewFullMenuBtn>
        </div>
      </div>
    );
};

export default MenuPage;