import { createContext, useState } from "react";
const StateContext = createContext();

export function StateProvider({ children }) {
  const [fromValue, setFromValue] = useState("EUR");
  const [toValue, setToValue] = useState("USD");
  const [amount, setAmount] = useState(1);
  return (
    <StateContext.Provider
      value={{
        amount,
        setAmount,
        fromValue,
        setFromValue,
        toValue,
        setToValue,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
