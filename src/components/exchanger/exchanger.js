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
  const [fromValue, setFromValue] = useState("EUR");
  const [toValue, setToValue] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
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

  const fromChangerHandler = (event) => {
    setFromValue(event.target.value);
  };
  const toChangeHandler = (event) => {
    setToValue(event.target.value);
  };
  // useEffect(() => {
  //   const exchangeHandler = async () => {
  //     const response = await axios.get(
  //       `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/${fromValue}/${toValue}`
  //     );
  //     console.log(response.data);
  //   };
  //   exchangeHandler();
  // });
  const exchangeHandler = () => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/b3a5dde5ff3fa01bf5e615a8/pair/${fromValue}/${toValue}`
      )
      .then((response) => setExchangeRate(response.data.conversion_rate))
      .catch((error) => console.log(error));
    calculateResult();
  };
  const calculateResult = () => {
    console.log(exchangeRate);
  };
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
          <div className="exchanger__right__result">USD </div>
        </div>
      </div>
    </div>
  );
};
