
const SectionTitle = ({header, miniHeader}) => {
    return (
      <div className="flex flex-col space-y-2 justify-center items-center mb-8">
        <p className="text-lg text-[#D99904] italic">---{header}---</p>
        <hr className="w-72 border" />
        <h2 className="text-2xl font-semibold">{miniHeader}</h2>
        <hr className="w-72 border" />
      </div>
    );
};

export default SectionTitle;