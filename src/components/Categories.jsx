const Categories = () => {
    const datas = [
        {
            icon: "images/globeicon.svg",
            title: "Digital Marketing",
            paragraph: "Bring your vision to life with digital marketing professionals ready to assist you.",
            id: 1
        },
        {
            icon: "images/penicon.svg",
            title: "Graphic & Design",
            paragraph: "Bring your vision to life with creative graphic design professionals ready to assist you.",
            id: 2
        },
        {
            icon: "images/chipicon.svg",
            title: "Programming & Tech",
            paragraph: "Bring your vision to life with technologists around the world ready to assist you.",
            id: 3
        }
    ]
  return (
    <div>
        <div className="flex flex-col lg:flex-row items-center justify-center px-10 lg:px-24 mb-20">
            {datas.map((data, id) => ( 
                <div data-aos="fade-up" key={id} className="border-2 mx-3 my-5 p-7 rounded-3xl cursor-pointer shadow-md">
                    <img src={data.icon} alt={`Icon${data.id}`} className="h-12" />
                    <h4 className="text-xl py-2 font-semibold">{data.title}</h4>
                    <p>{data.paragraph}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories