import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Ben" heroName="FlowerPotMan" />
      <Greet name="clark" heroName="Superman" />
      <Greet name="Spike" heroName="Lizard" />
    </div>
  );
}

export default App;
