import "./exchanger.css";
export const Exchanger = () => {
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
            <option value="hello">hello</option>
          </select>
        </div>
        <div>
          <div className="exchanger__to__text">To</div>
          <select className="exchanger__to">
            <option value="hello">hello</option>
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
