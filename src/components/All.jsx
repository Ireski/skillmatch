const All = () => {
  const datas = [
    {
      image: "./images/blog1.jpg",
      title: "Unlocking the Secrets of Freelance Success",
      description: "Understand key elements to include in your contracts.",
      id: 1,
      link: "https://www.youtube.com",
    },
    {
      image: "./images/blog2.jpg",
      title: "Time Management for Freelancers",
      description: "Create a portfolio that showcases your best work.",
      id: 2,
      link: "https://www.instagram.com",
    },
    {
      image: "./images/blog3.jpg",
      title: "Effective Communication with Clients",
      description:
        "Learn effective strategies for pricing your freelance services.",
      id: 3,
      link: "https://www.facebook.com",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col lg:flex-row items-center justify-between"
    >
      {datas.map((data) => (
        <div className="mx-3 my-2 text-left cursor-pointer" key={data.id}>
          <a href={data.link} target="_blank">
            <img
              className="h-64 rounded-3xl shadow-slate-400 shadow-sm mb-5"
              src={data.image}
              alt={`img ${data.id}`}
            />
            <div className="w-10/12">
              <h3 className="font-semibold text-xl">{data.title}</h3>
              <p>{data.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default All;
