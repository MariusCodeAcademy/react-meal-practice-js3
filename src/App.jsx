import "./App.css";
import Header from "./compontents/Layout/Header";
import MealsSummary from "./compontents/Meals/MealsSummary";
import AvailableMeals from "./compontents/Meals/AvailableMeals";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </div>
  );
}

export default App;
