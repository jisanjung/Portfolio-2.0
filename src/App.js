import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react/cjs/react.development";
import { Link } from "react-scroll";

function App() {

  const dottedBackground = {
    backgroundImage: "radial-gradient(lightgray 1px, transparent 0)",
    backgroundSize: "7px 7px"
  }

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function(e) {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const pageLength = document.body.scrollHeight;

      // show button when half of the page is scrolled
      if (winScroll >= (pageLength / 2)) {
        setShowButton(true); 
      } else {
        setShowButton(false);
      }
  });
  }, []);

  return (
    <main className="text-gray-800 bg-gray-100 px-4 md:px-12 lg:px-0"> 
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} className={`cursor-pointer transition-all z-10 fixed ${showButton ? "right-0 lg:pr-16": "-right-12"} bottom-6 lg:bottom-0 transform rotate-90`}>
        <MdSubdirectoryArrowLeft className="text-4xl md:text-5xl"/>
      </Link>
      <div className="container mx-auto relative lg:w-4/5 xl:w-auto w-1000px" style={dottedBackground}>
        <Header/>
        <Home/>
        <div className="mx-4 md:mx-6">
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </main>
  );
}

export default App;
