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
      // 2 keliai
      const { item } = action;
      const updatedTotalAmount = state.totalAmount + item.price * item.amount;
      //// 1a itemas jau yra krepselyje mes norim padinti jo kiieki ir totalAmount
      // galima perdaryti i modernesni varianta.
      const existingCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        //// 2a itemo nera krepsely mes ji idedam
        updatedItems = [...state.items, item];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      // surasti item krepselyje ir
      // masyvas yra state.items
      // itemID yra
      const id = action.id;
      // 1a jei item yra tik vienas krepselyje - pasalinam visa item
      // 2a jei daugiau tai pamazinam kieki
      // totalAmmount
      throw new Error("remove item not completed yet");
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
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
