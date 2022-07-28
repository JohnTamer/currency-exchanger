import "./exchanger.css";
import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL_from =
  "https://v6.exchangerate-api.com/v6/b3a5dde5ff3fa01bf5e615a8/latest/EUR";
const BASE_URL_To =
  "https://v6.exchangerate-api.com/v6/b3a5dde5ff3fa01bf5e615a8/latest/USD";
export const Exchanger = () => {
  const [fromCurrencyOption, setFromCurrencyOption] = useState([]);
  const [toCurrencyOption, setToCurrencyOption] = useState([]);
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
  }, []);
  return (
    <div className="exchanger">
      <div className="exchanger__left">
        <div className="exchanger__left__amount">
          <p>Amount</p>
          <input className="exchanger__input" type="number" />
          <div className="exchanger__left__result">1 EUR = USD</div>
        </div>
      </div>
      <div className="exchanger__right">
        <div>
          <div className="exchanger__from__text">From</div>
          <select className="exchanger__from">
            {fromCurrencyOption.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="exchanger__to__text">To</div>
          <select className="exchanger__to">
            {toCurrencyOption.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div>
            <button className="exchanger__btn">convert</button>
          </div>
          <div className="exchanger__right__result">USD</div>
        </div>
      </div>
    </div>
  );
};
