// V.IMP ==> I TRIED TO USE FIXER.IO API BUT IT DOESN'T WORK THERE IS A PROBELM WITH IT SO I USED EXCHANGERATE API <== V.IMP
import { useContext } from "react";
import StateContext from "../../context/stateContext";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  const { fromValue, toValue } = useContext(StateContext);
  return (
    <div className="header">
      <div className="header__img">
        <img src={require("../../assets/images/logo.PNG")} alt="logo" />
      </div>
      <div className="header__links">
        <nav>
          {" "}
          <Link to="detail" className="header__btn">
            {`${fromValue}-${toValue}`} Details
          </Link>
          <Link to="detail" className="header__btn">
            EUR-GBP Details
          </Link>
        </nav>
      </div>
    </div>
  );
};
