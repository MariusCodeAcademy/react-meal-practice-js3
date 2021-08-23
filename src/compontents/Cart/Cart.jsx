import { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

// rodyti order mygtuka tik tai turim itemu krepselyje

// diagrams.net ar panasiu irankiu nubraizyti musu padarytos programos struktura
// atvaizduoti kur kokie duomenys, kur kokie props ar perduodamos funkcijos

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    console.log("cartItemAddHandler ran", item);
    cartCtx.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {
    console.log("cartItemRemoveHandler ran", id);
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        // Create CartItem component
        <CartItem
          key={item.id}
          // budas prideti funkcijai argumenta kai jo paprastai negalim prideti
          onAddItem={cartItemAddHandler.bind(null, item)}
          onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}
          {...item}
        />
      ))}
    </ul>
  );
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
