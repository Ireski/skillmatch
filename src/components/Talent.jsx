const Talent = () => {
  const talents = [
    {
      image: "images/freelancer1.jpg",
      name: "Emma Davis",
      role: "Social Media Manager",
      about: "Building brand awareness through engaging social media.",
    },
    {
      image: "images/freelancer2.jpg",
      name: "Lina Martinez",
      role: "Video Editor",
      about: "Understanding user needs to enhance video.",
    },
    {
      image: "images/freelancer3.jpg",
      name: "Sarah Lee",
      role: "Content Writer",
      about: "Creating stunning visuals that capture your brand's essence.",
    },
    {
      image: "images/freelancer4.jpg",
      name: "Mark Smith",
      role: "Graphic Designer",
      about: "Creating stunning visuals that capture your brand's essence.",
    },
  ];
  return (
    <div>
      <div className="px-2 lg:px-6 text-center py-24">
        <h3 className="text-4xl lg:text-5xl font-semibold pb-9">
          Vetted talent at your fingertips!
        </h3>
        <p className="text-lg pb-6">
          Discover skilled freelancers ready to assist you.
        </p>
        <button className="border-none">
          View all <i className="bx bx-chevron-right"></i>
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-center pt-20 px-8">
          {talents.map((talent) => (
            <div
              data-aos="fade-up"
              key={talent.name}
              className="omo2 text-center mx-0 lg:mx-3 my-3"
            >
              <img
                src={talent.image}
                className="h-[200px] lg:h-[250px] lg:w-[450px] rounded-3xl"
                alt=""
              />
              <h3 className="text-xl font-semibold pt-4">{talent.name}</h3>
              <p className="pb-4">{talent.role}</p>
              <p>{talent.about}</p>
              <div className="pt-6">
                <button className="b1 py-2 px-4 rounded-lg text-white mr-2">
                  View Profile
                </button>
                <button className="border-none ">
                  Book a Call <i className="bx bx-chevron-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-2 lg:my-7 bg-secondary text-center py-12 px-6 lg:py-32 lg:px-24">
        <div
          data-aos="fade-up"
          className="bg-gray-200 py-9 px-9 lg:py-20 lg:px-56 rounded-3xl"
        >
          <h3 className="text-4xl lg:text-5xl font-semibold pb-5 lg:pb-9">
            Join a vibrant community of talented freelancers
          </h3>
          <p className="text-md pb-5 lg:pb-9">
            Unlock your potential and connect with clients seeking your
            unique skills and expertise.
          </p>
          <span>
            <button className="bg-orange-600 text-white py-3 px-4 rounded-lg mr-2 my-2">
              Become a Freelancer
            </button>
          </span>
          <span>
            <button className="border-2 border-orange-600 py-3 px-4 rounded-lg ml-2 my-2">
              Post A Job
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Talent;
