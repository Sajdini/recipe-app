// r0eact router
import { Routes, Route } from "react-router-dom";

//components
import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "./Searched";
<<<<<<< HEAD
import Default from "./Default";
=======
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289

const Pages = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="*" element={<Default />} />
=======
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:searched" element={<Searched />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
