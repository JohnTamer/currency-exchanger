import "./details.css";
import { Header } from "../../components/header/header";
import { useContext } from "react";
import StateContext from "../../context/stateContext";
import { Exchanger } from "../../components/exchanger/exchanger";
import { Link } from "react-router-dom";
import { Chart } from "../../components/chart/chart";

export const Details = () => {
  const { fromValue } = useContext(StateContext);
  return (
    <div className="details">
      <Header />

      <div className="details__div">
        <div>{fromValue}</div>
        <nav className="details__nav">
          <Link to="/" className="details__btn">
            Back to Home
          </Link>
        </nav>
      </div>
      <Exchanger className="details__exchanger" />
      <Chart />
    </div>
  );
};
