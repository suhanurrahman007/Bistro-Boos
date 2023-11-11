import BistroBoss from "../../../Share/BistroBoss/BistroBoss";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import ViewFullMenu from "../ViewFullMenu/ViewFullMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <Menu></Menu>
            <BistroBoss></BistroBoss>
            <ViewFullMenu></ViewFullMenu>
        </div>
    );
};

export default Home;