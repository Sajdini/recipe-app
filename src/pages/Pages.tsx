// r0eact router
import { Routes, Route } from "react-router-dom";

//components
import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "./Searched";
import Default from "./Default";

const Pages = () => {
  return (
    <Routes>
      <Route path="*" element={<Default />} />
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:searched" element={<Searched />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
