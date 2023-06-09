import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import { Hero } from "./components";
import { About } from "./components";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Stars from "./components/canvas/Stars";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            <Stars />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
