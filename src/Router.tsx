import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin></Coin>}></Route>
        <Route path="/" element={<Coins></Coins>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
