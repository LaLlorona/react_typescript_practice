import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/" element={<Coin></Coin>}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route path="/" element={<Coins></Coins>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
