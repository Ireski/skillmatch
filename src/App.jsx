import Nav from "./components/Nav";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Experience from "./components/Experience";
import Talent from "./components/Talent";
import Testimonial from "./components/Testimonial";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Insight from "./components/Insight";
import Footer from "./components/Footer";
import Categ from "./components/Categ";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Nav />
      {/* <Navbar /> */}
      <Hero />
      <Category />
      <Categ />
      <Experience />
      <Talent />
      <Testimonial />
      <Insight />
      <Footer />
    </>
  );
};

export default App;
