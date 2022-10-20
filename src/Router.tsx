import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
