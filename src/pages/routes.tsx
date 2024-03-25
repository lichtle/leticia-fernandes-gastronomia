import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./home";
import { Recipes } from "./recipes";

const Paths = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receitas" element={<Recipes />} />
    </Routes>
  </BrowserRouter>
);

export default Paths;
