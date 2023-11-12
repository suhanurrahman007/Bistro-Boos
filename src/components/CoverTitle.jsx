import { Parallax } from "react-parallax";

const CoverTitle = ({ coverHeader, coverBody, coverImg }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="bistro-boss-container bg-cover bg-center py-5 md:py-20"
      >
        <div className="text-center p-5 md:px-32 md:py-20 space-y-4 bg-black opacity-50 text-white  w-10/12 mx-auto">
          <h2 className="text-2xl  font-semibold">{coverHeader}</h2>
          <p className="text-sm ">{coverBody}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default CoverTitle;
