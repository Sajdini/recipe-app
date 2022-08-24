// r0eact router
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Loader from "../components/Loader";
const Home = React.lazy(() => import("./Home"));
const Cuisine = React.lazy(() => import("./Cuisine"));
const Recipe = React.lazy(() => import("./Recipe"));
const Searched = React.lazy(() => import("./Searched"));
const Default = React.lazy(() => import("./Default"));

const Pages = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="*" element={<Default />} />
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:searched" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Suspense>
  );
};

export default Pages;
