import { Routes, Route } from "react-router-dom";
import CheckoutCartView from "../views/CheckoutCartView";
import DetailProduct from "../views/DetailProduct";
import HomeView from "../views/HomeView";
import MonitoresView from "../views/MonitoresView";
import MovilesView from "../views/MovilesView";
import TvViews from "../views/TvViews";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/product/:id" element={<DetailProduct />} />
      <Route path="/monitores" element={<MonitoresView />} />
      <Route path="/moviles" element={<MovilesView />} />
      <Route path="/tvs" element={<TvViews />} />
      <Route path="/checkout/cart" element={<CheckoutCartView />} /> 
    </Routes>
  );
};
export default Main;
