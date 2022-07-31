// V.IMP ==> I TRIED TO USE FIXER.IO API BUT IT DOESN'T WORK THERE IS A PROBELM WITH IT SO I USED EXCHANGERATE API <== V.IMP

import "./exchanger.css";
import axios from "axios";
import { useEffect, useState } from "react";
import StateContext from "../../context/stateContext";
import { useContext } from "react";
const BASE_URL_from =
  "https://v6.exchangerate-api.com/v6/b3a5dde5ff3fa01bf5e615a8/latest/EUR";
const BASE_URL_To =
  "https://v6.exchangerate-api.com/v6/b3a5dde5ff3fa01bf5e615a8/latest/USD";
export const Exchanger = () => {
  const { amount, setAmount, fromValue, setFromValue, toValue, setToValue } =
    useContext(StateContext);
  const [fromCurrencyOption, setFromCurrencyOption] = useState([]);
  const [toCurrencyOption, setToCurrencyOption] = useState([]);
  // const [fromValue, setFromValue] = useState("EUR");
  // const [toValue, setToValue] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
  // const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(1);

  console.log(fromCurrencyOption);
  useEffect(() => {
    axios
      .get(BASE_URL_from)
      .then((response) => {
        console.log(response.data);
        setFromCurrencyOption([...Object.keys(response.data.conversion_rates)]);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(BASE_URL_To).then((response) => {
      setToCurrencyOption([...Object.keys(response.data.conversion_rates)]);
    });
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/b3a5dde5ff3fa01bf5e615a8/pair/${fromValue}/${toValue}`
      )
      .then((response) => setExchangeRate(response.data.conversion_rate));
  }, [fromValue, toValue]);

  const fromChangerHandler = (event) => {
    setFromValue(event.target.value);
  };
  const toChangeHandler = (event) => {
    setToValue(event.target.value);
  };

  const exchangeHandler = () => {
    setResult(exchangeRate * Number(amount));
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="exchanger">
      <div className="exchanger__left">
        <div className="exchanger__left__amount">
          <p>Amount</p>
          <input
            className="exchanger__input"
            type="number"
            value={amount}
            onChange={amountHandler}
          />
          <div className="exchanger__left__result">
            {amount} {fromValue} = {result} {toValue}
          </div>
        </div>
      </div>
      <div className="exchanger__right">
        <div>
          <div className="exchanger__from__text">From</div>
          <select className="exchanger__from" onChange={fromChangerHandler}>
            {fromCurrencyOption.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="exchanger__to__text">To</div>
          <select className="exchanger__to" onChange={toChangeHandler}>
            {toCurrencyOption.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div>
            <button className="exchanger__btn" onClick={exchangeHandler}>
              convert
            </button>
          </div>
          <div className="exchanger__right__result">
            {result} : {toValue}
          </div>
        </div>
      </div>
    </div>
  );
};
