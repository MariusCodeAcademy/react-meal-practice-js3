import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// pagrindine reducer funkcija ==================
// action.item === { id: "c1", name: "Sushi", amount: 2, price: 12.99 }
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // visa pridejimo i krepseli logika ir grazinti nauja sate versija
      const { item } = action;
      const updatedItems = [...state.items, item];
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      throw new Error("remove item not completed yet");
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // add to cart action
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
