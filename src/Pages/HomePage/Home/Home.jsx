import BistroBoss from "../../../Share/BistroBoss/BistroBoss";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Menu from "../Menu/Menu";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import OurMenu from "../OurMenu/OurMenu";
import ViewFullMenu from "../ViewFullMenu/ViewFullMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <Menu></Menu>
            <BistroBoss></BistroBoss>
            <ViewFullMenu></ViewFullMenu>
            <ChefRecommends></ChefRecommends>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;