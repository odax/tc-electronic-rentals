import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Information } from "./components/Information";

function App() {
  return (
    <div className="App">
      <Header />
      <Information />
    </div>
  );
}

export default App;
