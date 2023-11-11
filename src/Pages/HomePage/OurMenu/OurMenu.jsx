import SectionTitle from "../../../components/SectionTitle";
import img from "../../../assets/home/featured.jpg"

const OurMenu = () => {
    return (
      <div
        className="bistro-boss-container relative bg-cover bg-fixed bg-center py-5 md:py-20 mt-5"
        style={{ backgroundImage: "url(/src/assets/home/featured.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white">
          <SectionTitle
            header={"FROM OUR MENU"}
            miniHeader={"Check it out"}
          ></SectionTitle>

          <div className="md:flex gap-7 px-5 md:px-20 mt-16">
            <img className="w-full md:w-1/2" src={img} alt="" />
            <div className="w-full md:w-1/2 flex flex-col justify-center mt-5 md:mt-0">
              <h4 className="text-lg">March 20, 2023</h4>
              <h2 className="text-xl font-semibold"> WHERE CAN I GET SOME?</h2>
              <p className="text-sm text-justify text-gray-300">
                And nodded word fiery nevermore the oer door that, he muttered
                unbrokenquit fowl thing. Quoth upon this off nevermore the
                scarcely art weak. Quoth bird and some thee loneliness, on head
                i expressing upon off that maiden saintly nights, of.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurMenu;