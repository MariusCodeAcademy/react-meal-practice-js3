import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnBumpAdded, setBtnBumpAdded] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce(
    (total, curObj) => total + curObj.amount,
    0
  );

  console.log("cart items", cartCtx.items);

  const btnClasses = `${classes.button} ${btnBumpAdded ? classes.bump : ""}`;

  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnBumpAdded(true);
    const timerBumb = setTimeout(() => {
      setBtnBumpAdded(false);
    }, 300);
    return () => {
      clearTimeout(timerBumb);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
