import ViewFullMenuBtn from "../../../components/ViewFullMenuBtn";

const ViewFullMenu = () => {
    return (
      <section className="space-y-12 text-center py-14">
          <ViewFullMenuBtn viewFullMenuBtn={"View Full Menu"}></ViewFullMenuBtn>
        <div className="py-12 bg-black text-white">
          <h2 className="text-2xl font-bold">Call Us: +88 0192345678910</h2>
        </div>
      </section>
    );
};

export default ViewFullMenu;