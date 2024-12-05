const Testimonial = () => {
  const height = "550px"
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-14 lg:px-20 px-12">
        <img src="images/testimonyimg.webp" alt="" style={{height: height}} />
        <div data-aos="fade-left" className="text-center w-full lg:w-2/4 mb-12">
            <i className="bx bxs-star text-orange-600 text-2xl"></i>
            <i className="bx bxs-star text-orange-600 text-2xl"></i>
            <i className="bx bxs-star text-orange-600 text-2xl"></i>
            <i className="bx bxs-star text-orange-600 text-2xl"></i>
            <i className="bx bxs-star text-orange-600 text-2xl"></i>
            <h5 className="text-3xl font-semibold text-left pb-6">{`"This platform transformed the way I find talent. The ease of use and quality of freelancers is unmatched!"`}</h5>
            <h6 className="text-left font-semibold">Jennifer Eckhart</h6>
            <p className="text-left">Project Manager</p>
        </div>
    </div>
  )
}

export default Testimonial