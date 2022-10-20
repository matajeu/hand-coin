import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import Chart from "./components/Chart";
import Price from "./components/Price";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
