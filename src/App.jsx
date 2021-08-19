import "./App.css";
import Header from "./compontents/Layout/Header";
import Meals from "./compontents/Meals/Meals";
import Cart from "./compontents/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
      </main>
      <Cart />
    </div>
  );
}

export default App;
