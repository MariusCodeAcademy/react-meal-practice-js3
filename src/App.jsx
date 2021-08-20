import "./App.css";
import Header from "./compontents/Layout/Header";
import Meals from "./compontents/Meals/Meals";
import Cart from "./compontents/Cart/Cart";
import { useState } from "react";

// uzduotis panaudoti state kintamaji ir valdyti modalo isjungima ir ijungima su
// atitinkamais mygtukais ir paspaudimais

// su diagrams net, nubraizyti sio projekto shemini vaizda

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
