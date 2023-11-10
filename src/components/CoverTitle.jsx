
const CoverTitle = ({ coverHeader, coverBody }) => {
  return (
    <div className="text-center p-5 md:px-32 md:py-20 space-y-4 bg-white w-10/12 mx-auto">
      <h2 className="text-2xl font-semibold">{coverHeader}</h2>
      <p className="text-sm text-gray-600">{coverBody}</p>
    </div>
  );
};

export default CoverTitle;