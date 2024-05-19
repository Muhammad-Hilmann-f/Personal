import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Skills from "./Components/pages/Skills/Skills";
import Projects from "./Components/pages/Projects/Project";
const App = () => {
  return (
    <div className="bg-[#332F2F]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/Skills" element={<Skills />}></Route>
      </Routes>
      <Routes>
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
