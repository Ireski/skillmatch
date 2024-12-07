const Footer = () => {
  const datos = [
    {
      a: {
        name: "Services",
        // linker: "https://skill-match.webflow.io/services",
      },
      b: {
        name: "About Us",
      },
      c: {
        name: "Memberships",
      },
      d: {
        name: "FAQ'S",
      },
      e: {
        name: "Contact Support",
      },
      f: {
        name: "Blog Insights",
      },
      g: {
        name: "Privacy Policy",
      },
      h: {
        name: "Terms of Use",
      },
    },
    {
      a: {
        name: "Writing & Translation",
      },
      b: {
        name: "Video & Animation",
      },
      c: {
        name: "Programming & Tech",
      },
      d: {
        name: "Digital Marketing",
      },
      e: {
        name: "Graphic & Design",
      },
      f: {
        name: "",
      },
      g: {
        name: "",
      },
      h: {
        name: "",
      },
    },
    {
      a: {
        name: "LinkedIn",
        linker: "https://www.linkedin.com",
      },
      b: {
        name: "Instagram",
        linker: "https://www.instagram.com",
      },
      c: {
        name: "Facebook",
        linker: "https://www.facebook.com",
      },
      d: {
        name: "Twitter",
        linker: "https://www.x.com",
      },
      e: {
        name: "",
      },
      f: {
        name: "",
      },
      g: {
        name: "",
      },
      h: {
        name: "",
      },
    },
    {
      a: {
        name: "Email Us Here",
        linker: "",
      },
      b: {
        name: "Call Us Today",
      },
      c: {
        name: "Chat With Us",
      },
      d: {
        name: "Template Instructions",
      },
      e: {
        name: "Changelog",
      },
      f: {
        name: "Licenses",
      },
      g: {
        name: "Style Guide",
      },
      h: {
        name: "",
      },
    },
    {
      a: {
        name: "SignUp-Freelancer",
        linker: "",
      },
      b: {
        name: "SignUp-Client",
      },
      c: {
        name: "Onboarding-Freelancer",
      },
      d: {
        name: "Login",
      },
      e: {
        name: "",
      },
      f: {
        name: "",
      },
      g: {
        name: "",
      },
      h: {
        name: "",
      },
    },
    {
      a: {
        name: "Client Dashboard",
        linker: "",
      },
      b: {
        name: "Freelancer Dashboard",
      },
      c: {
        name: "Job Board",
      },
      d: {
        name: "Post a Job",
      },
      e: {
        name: "Apply to a Job",
      },
      f: {
        name: "",
      },
      g: {
        name: "",
      },
      h: {
        name: "",
      },
    },
  ];
  return (
    <div className="flex flex-col px-8 lg:px-20 pt-32 pb-40 mt-9 bg-[#01020f] text-white">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        {datos.map((dato) => (
          <div key={dato.a.name} className="flex flex-col">
            <a
              href={dato.a.linker}
              target="_blank"
              className="py-3 cursor-pointer"
            >
              {dato.a.name}
            </a>
            <a
              href={dato.b.linker}
              target="_blank"
              className="py-3 cursor-pointer"
            >
              {dato.b.name}
            </a>
            <a
              href={dato.c.linker}
              target="_blank"
              className="py-3 cursor-pointer"
            >
              {dato.c.name}
            </a>
            <a
              href={dato.d.linker}
              target="_blank"
              className="py-3 cursor-pointer"
            >
              {dato.d.name}
            </a>
            <a
              href={dato.e.linker}
              target="_blank"
              className="py-3 cursor-pointer"
            >
              {dato.e.name}
            </a>
            <a
              href={dato.f.linker}
              target="_blank"
              className="py-3 cursor-pointer"
            >
              {dato.f.name}
            </a>
            <a
              href={dato.g.linker}
              target="_blank"
              className="py-3 cursor-pointer"
            >
              {dato.g.name}
            </a>
            <a
              href={dato.g.linker}
              target="_blank"
              className="py-3 cursor-pointer"
            >
              {dato.h.name}
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pt-2 lg:pt-24">
        <p>
          Copyright © Skill Match | Designed by{" "}
          <a className="text-orange-400 underline" href="">
            Paperunikorn
          </a>{" "}
          - Powered by Webflow
        </p>
        <img className="h-4" src="./images/whitelogo.png" alt="" />
      </div>
      <div className="flex flex-row items-center justify-center bg-white px-4 py-2 rounded-sm w-40 fixed top-[620px] left-56 lg:top-[580px] lg:left-[1180px]">
        <img src="./images/webflowbadge.svg" className="h-3" alt="" />
        <img src="./images/webflowfoot.svg" className="h-3" alt="" />
      </div>
    </div>
  );
};

export default Footer;
