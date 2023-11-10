import CoverTitle from "../../components/CoverTitle";
const BistroBoss = () => {
    return (
      <div
        className="bistro-boss-container bg-cover bg-center py-5 md:py-20 mt-5"
        style={{ backgroundImage: "url(/src/assets/home/chef-service.jpg)" }}
      >
        <CoverTitle
          coverHeader={"Bistro Boss"}
          coverBody={
            "My vainly bends once mystery guessing word, there tell soul maiden a this fiery back with lordly. Mystery with so before sent not soul, pallas darkness said sinking flung, startled."
          }
        ></CoverTitle>
      </div>
    );
};

export default BistroBoss;