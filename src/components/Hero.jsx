const Hero = () => {
  // const height = "550px";
  // const width = "450px";
  const borderwidth = "1px";

  //   const back = "url(images/heroimg.jpg)";
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-center px-4 lg:px-2 lg:pt-48 py-14 h-auto lg:h-screen">
      <div className="lg:w-3/6 w-auto px-2 pt-14 pb-12 mr-20">
        <div data-aos="fade-right">
          <h2 className="lg:text-5xl text-[30px] font-bold leading-10">
            Connect with Top Freelancers for Your Projec
          </h2>
          <p className="text-[15px] lg:text-lg py-4">
            Discover skilled freelancers ready to bring your ideas to life. Use
            our search bar to find the perfect match for your project needs.
          </p>
          <div className="flex flex-row items-center">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for any service..."
              className="border-gray-200 rounded-md pl-2 pr-10 lg:pr-72 py-3 my-2 mx-0"
              style={{ borderWidth: borderwidth }}
            />
            <button className="bg-orange-600 border-orange-600 text-white px-4 lg:px-6 py-2 mx-2 lg:mx-2 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-[url('/images/heroimg.jpg')] bg-cover bg-center rounded-3xl lg:w-[450px] w-[300px] h-[370px] lg:h-[500px] lg:ml-20 ml-12"
        // style={{ width: width }}
      >
        {/* <img
          className="hero rounded-3xl"
          style={{ height: height }}
          src="images/heroimg.jpg"
          alt=""
        /> */}
        <div data-aos="fade-up">
          <img
            className="h-[140px] lg:h-[160px] relative top-[350px] lg:top-[400px] left-[-70px] lg:left-[-170px]"
            src="images/floatimg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
