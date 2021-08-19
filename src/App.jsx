import "./App.css";
import Header from "./compontents/Layout/Header";
import Meals from "./compontents/Meals/Meals";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
