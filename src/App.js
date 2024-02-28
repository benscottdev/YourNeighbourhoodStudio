import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Artists from "./Pages/Artists";
import OurWork from "./Pages/OurWork";
import Faq from "./Pages/Faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<About />}></Route>
      <Route path="/" element={<Artists />}></Route>
      <Route path="/" element={<OurWork />}></Route>
      <Route path="/" element={<Faq />}></Route>
    </Routes>
  );
}
export default App;
