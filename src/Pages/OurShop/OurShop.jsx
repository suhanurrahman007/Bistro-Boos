import CoverTitle from "../../components/CoverTitle";
import img1 from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FilterShop from "../../components/FilterShop";
import { Helmet } from "react-helmet";

const OurShop = () => {
    const [menu]  = useMenu()
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const drinks = menu.filter((item) => item.category === "drinks");
    
    return (
      <div>
        <Helmet>
          <title>Bistro Boss - Shop</title>
        </Helmet>
        <CoverTitle
          coverHeader={"Our Shop"}
          coverBody={"Would you like to try a dish?"}
          coverImg={img1}
        ></CoverTitle>
        <div>
          <Tabs className={"my-10"}>
            <TabList className={"flex justify-center items-center mb-8"}>
              <Tab>All</Tab>
              <Tab>pizza</Tab>
              <Tab>Salad</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </TabList>

            <TabPanel>
              <FilterShop filterItems={menu}></FilterShop>
            </TabPanel>
            <TabPanel>
              <FilterShop filterItems={pizza}></FilterShop>
            </TabPanel>
            <TabPanel>
              <FilterShop filterItems={salad}></FilterShop>
            </TabPanel>
            <TabPanel>
              <FilterShop filterItems={soup}></FilterShop>
            </TabPanel>
            <TabPanel>
              <FilterShop filterItems={dessert}></FilterShop>
            </TabPanel>
            <TabPanel>
              <FilterShop filterItems={drinks}></FilterShop>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default OurShop;