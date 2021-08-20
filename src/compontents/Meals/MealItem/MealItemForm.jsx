import { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [formQty, setFormQty] = useState(1);

  const inputValueHandler = (e) => {
    setFormQty(e.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("ivesta: ", formQty);
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
    </form>
  );
};

export default MealItemForm;
