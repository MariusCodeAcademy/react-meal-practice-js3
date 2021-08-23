import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // TODO: count all items quantities
  const numberOfCartItems = cartCtx.items.length;

  // uzdeti clase bump kaskarta kai yra idedamas ar isimamas item is krepselio
  // ar keiciasi keikis
  const btnClasses = `${classes.button} ${classes.bump}`;

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
