import "./mostPopular.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import StateContext from "../../context/stateContext";

export const MostPopular = () => {
  const { fromValue, amount } = useContext(StateContext);
  const [AED, setAED] = useState();
  const [AFN, setAFN] = useState();
  const [ALL, setALL] = useState();
  const [AMD, setAMD] = useState();
  const [ANG, setANG] = useState();
  const [AOA, setAOA] = useState();
  const [ARS, setARS] = useState();
  const [AUD, setAUD] = useState();
  const [AWG, setAWG] = useState();
  useEffect(() => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/b3a5dde5ff3fa01bf5e615a8/latest/${fromValue}`
      )
      .then((response) => {
        console.log(response.data);
        const rates = response.data.conversion_rates;
        const { AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG } = rates;
        setAED(AED * amount);
        setAFN(AFN * amount);
        setALL(ALL * amount);
        setAMD(AMD * amount);
        setANG(ANG * amount);
        setAOA(AOA * amount);
        setARS(ARS * amount);
        setAUD(AUD * amount);
        setAWG(AWG * amount);
      });
  }, [fromValue, amount]);
  return (
    <div>
      <div className="wrapper">
        <div className="one">
          {amount} {fromValue} = {AED} AED
        </div>
        <div className="one">
          {amount} {fromValue} = {AFN} AFN
        </div>
        <div className="one">
          {amount} {fromValue} = {ALL} ALL
        </div>
        <div className="one">
          {amount} {fromValue} = {AMD} AMD
        </div>
        <div className="one">
          {amount} {fromValue} = {ANG} ANG
        </div>
        <div className="one">
          {amount} {fromValue} = {AOA} AOA
        </div>
        <div className="one">
          {amount} {fromValue} = {ARS} ARS
        </div>
        <div className="one">
          {amount} {fromValue} = {AUD} AUD
        </div>
        <div className="one">
          {amount} {fromValue} = {AWG} AWG
        </div>
      </div>
    </div>
  );
};
