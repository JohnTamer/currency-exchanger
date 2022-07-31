import "./home.css";
import { Header } from "../../components/header/header";
import { Exchanger } from "../../components/exchanger/exchanger";
import { MostPopular } from "../../components/mostPopular/mostPopular";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__text">Currency Exchanger</div>
      <Exchanger />
      <MostPopular />
    </div>
  );
};
