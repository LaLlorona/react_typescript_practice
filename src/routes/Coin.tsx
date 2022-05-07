import { Params, useParams } from "react-router-dom";

interface RouteParams extends Params {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams() as RouteParams;

  return <h1>coin: {coinId}</h1>;
}

export default Coin;
