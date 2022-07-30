import { createContext, useState } from "react";
const StateContext = createContext();

export function StateProvider({ children }) {
  const [amount, setAmount] = useState(1);
  return (
    <StateContext.Provider value={{ amount, setAmount }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
