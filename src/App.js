import "./App.css";
import { Home } from "./pages/home/home";
import { StateProvider } from "./context/stateContext";
function App() {
  return (
    <div className="app">
      <StateProvider>
        <Home />
      </StateProvider>
    </div>
  );
}

export default App;
