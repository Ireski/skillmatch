const Experience = () => {
  const exps = [
    {
      title: "Diverse Talent Pool",
      paragraph:
        "Toffee sweet macaroon chocolate cake lollipop shortbread. Sugar plum topping cake toffee powder cupcake tiramisu apple pie.",
      button: "Browse Freelancers",
    },
    {
      title: "Easily Post Jobs",
      paragraph:
        "Toffee sweet macaroon chocolate cake lollipop shortbread. Sugar plum topping cake toffee powder cupcake tiramisu apple pie.",
      button: "Post a Job",
    },
    {
      title: "Manage Contracts",
      paragraph:
        "Toffee sweet macaroon chocolate cake lollipop shortbread. Sugar plum topping cake toffee powder cupcake tiramisu apple pie.",
      button: "Sign up",
    },
  ];
  return (
    <div className="experience bg-center bg-cover h-auto bg-blend-darken bg-black/45 py-24 px-5 lg:px-14">
      <div className="lg:w-4/6">
        <h3 className="text-white text-4xl lg:text-5xl font-semibold py-3">
          Experience freelance talent like never before
        </h3>
        <p className="text-white pt-3 pb-9 text-lg">
          Partnering with top freelancers can elevate your projects and drive
          results. Our platform connects you with skilled professionals ready to
          tackle your unique challenges. Experience the flexibility and
          expertise that comes with freelance collaboration.
        </p>
        <div className="flex flex-row">
          <button className="bg-orange-600 border-orange-600 text-white px-6 py-2 rounded-lg">
            Post A Job
          </button>
          <button className="text-white text-lg px-6 py-2 border-none">
            View all categories <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center pt-32 px-0 lg:px-2">
        {exps.map((exp) => (
          <div
            data-aos="fade-left"
            className="lg:mx-3 mt-5 p-7 rounded-3xl cursor-pointer shadow-md bg-white"
            key={exp.title}
          >
            <h3 className="text-2xl py-2 font-semibold">{exp.title}</h3>
            <p className="py-2">{exp.paragraph}</p>
            <button className="text-black py-2 mt-2 border-none font-semibold">
              {exp.button}
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
