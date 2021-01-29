import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Information } from "./components/Information";
import { CalculatorFrame } from "./components/CalculatorFrame";

function App() {
  return (
    <div className="App">
      <Header />
      <Information />
      <CalculatorFrame />
    </div>
  );
}

export default App;
