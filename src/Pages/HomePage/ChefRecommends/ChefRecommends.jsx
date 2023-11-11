import SectionTitle from "../../../components/SectionTitle";
import img1 from "../../../assets/home/banner.jpg"
import img2 from "../../../assets/home/chef-service.jpg"
import img3 from "../../../assets/home/featured.jpg";


const ChefRecommends = () => {
    return (
      <div className="mt-10">
        <SectionTitle
          header={"CHEF RECOMMENDS"}
          miniHeader={"Should Try"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="card shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={img1}
                alt="CaeserSalad"
                className="rounded-lg h-44 md:h-32  lg:h-48 w-full"
              />
            </figure>
            <div className="card-body items-center text-center ">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions">
                <button className="btn btn-outline btn-secondary border-0 border-b-4">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="card shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={img2}
                alt="CaeserSalad"
                className="rounded-lg h-44 md:h-32 lg:h-48 w-full"
              />
            </figure>
            <div className="card-body items-center text-center ">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions">
                <button className="btn btn-outline btn-secondary border-0 border-b-4">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="card shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={img3}
                alt="CaeserSalad"
                className="rounded-lg h-44 md:h-32 lg:h-48 w-full"
              />
            </figure>
            <div className="card-body items-center text-center ">
              <h2 className="card-title">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions">
                <button className="btn btn-outline btn-secondary border-0 border-b-4">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ChefRecommends;