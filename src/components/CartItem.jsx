import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
}
