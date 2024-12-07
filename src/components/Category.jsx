const Category = () => {
  return (
    <div className="px-4 lg:px-16 lg:py-32 py-5 pt-24">
      <div className="lg:w-8/12 lg:w-96 w-[97vw] px-2 pt-14">
        <h2 className="lg:text-5xl text-4xl font-semibold">
          Browse talent by category
        </h2>
        <p className="text-lg w-11/12 py-4">
          Connect with talented freelancers across various fields. Our platform
          offers a diverse range of services to meet your project needs.
        </p>
        <div className="flex flex-row">
          <button className="bg-orange-600 border-orange-600 text-white px-6 py-2 rounded-lg">
            Post A Job
          </button>
          <button className="text-black text-lg px-6 py-2 border-none">
            View all categories <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
