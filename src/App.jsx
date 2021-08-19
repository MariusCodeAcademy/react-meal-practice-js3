import "./App.css";
import Header from "./compontents/Layout/Header";
import Meals from "./compontents/Meals/Meals";
import Cart from "./compontents/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
