import { useState, useContext } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  // iskviesti addtocart funkcija is cart context
  const [formQty, setFormQty] = useState("1");

  const inputValueHandler = (e) => {
    setFormQty(e.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // isitikinti kad ivesta reiksme yra tarp 1 ir 5 ir ne tuscia ir siusti tik tada kai reiksme tinkama
    if (formQty.trim().length === 0 || +formQty < 1 || +formQty > 5) return;
    // informuoti vartotoja jei jis bande ivesti netinkama reiksme

    console.log("ivesta: ", formQty);
    cartCtx.addItem({ id: "c1", name: "Sushi", amount: 2, price: 12.99 });
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        onChange={inputValueHandler}
        value={formQty}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          // min: 1,
          // max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
