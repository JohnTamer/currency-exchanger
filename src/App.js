import "./App.css";
import { Home } from "./pages/home/home";
import { StateProvider } from "./context/stateContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./pages/details/details";
function App() {
  return (
    <div className="app">
      <StateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
