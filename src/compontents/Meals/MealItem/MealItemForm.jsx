import { useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  // iskviesti addtocart funkcija is cart context
  const [formQty, setFormQty] = useState("1");
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputValueHandler = (e) => {
    setFormQty(e.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setAmountIsValid(true);

    // isitikinti kad ivesta reiksme yra tarp 1 ir 5 ir ne tuscia ir siusti tik tada kai reiksme tinkama
    if (formQty.trim().length === 0 || +formQty < 1 || +formQty > 5)
      return setAmountIsValid(false);
    // informuoti vartotoja jei jis bande ivesti netinkama reiksme

    console.log("ivesta: ", formQty);
    props.onAddItem(+formQty);
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
          min: 1,
          max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
