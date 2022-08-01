import "./App.scss";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const [activeSection, setActiveSection] = useState("#");
  const [ref, inView] = useInView({
    threshold: 0.7,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.3,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("#");
    }
    if (inView2) {
      setActiveSection("about");
    }
    if (inView3) {
      setActiveSection("experience");
    }
    if (inView4) {
      setActiveSection("portfolio");
    }
    if (inView5) {
      setActiveSection("contact");
    }
  }, [inView, inView2, inView3, inView4, inView5]);

  return (
    <>
      <div className="large__container">
        <Header innerRef={ref} />
        <Nav activeSection={activeSection} className="nav__bar" />
        <About innerRef={ref2} />
        <Experience innerRef={ref3} />
        <Portfolio innerRef={ref4} />
        <Contact innerRef={ref5} />
      </div>
      <Footer />
    </>
  );
}

export default App;
