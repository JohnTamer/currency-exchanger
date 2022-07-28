import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__img">
        <img src={require("../../assets/images/logo.PNG")} alt="logo" />
      </div>
      <div className="header__links">
        <button className="header__btn">EUR-USD Details</button>
        <button className="header__btn">EUR-GBP Details</button>
      </div>
    </div>
  );
};
