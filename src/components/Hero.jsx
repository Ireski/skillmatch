

const Hero = () => {
  const height = "550px";
  const width = "450px";
  const borderwidth = "1px";
  
  //   const back = "url(images/heroimg.jpg)";
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between px-4 lg:px-16 lg:py-20 py-5">
      <div className="lg:w-2/5 w-96 px-2 pt-14 pb-12">
      <div data-aos="fade-right">
        <h2 className="lg:text-5xl text-4xl font-bold leading-10">
          Connect with Top Freelancers for Your Projects
        </h2>
        <p className="text-lg py-4">  
        Discover skilled freelancers ready to bring your ideas to life. Use
        our search bar to find the perfect match for your project needs.          
        </p>
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for any service..."
            className="border-gray-200 rounded-md pl-2 pr-16 py-3 my-2 mx-2"
            style={{ borderWidth: borderwidth }}
          />
          <button className="bg-orange-600 border-orange-600 text-white px-6 py-2 mx-2 rounded-lg">
            Search
          </button>
          </div>
          </div>
        </div>
      <div
        className="lady bg-[url('images/heroimg.jpg')] bg-cover bg-center rounded-3xl"
        style={{ height: height, width: width }}
      >
        {/* <img
          className="hero rounded-3xl"
          style={{ height: height }}
          src="images/heroimg.jpg"
          alt=""
        /> */}
        <div data-aos="fade-up">
        <img className="omo h-6" src="images/floatimg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
