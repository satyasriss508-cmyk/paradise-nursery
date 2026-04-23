import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Spider Plant", price: 12, category: "Indoor" },
  { id: 5, name: "Fern", price: 18, category: "Outdoor" },
  { id: 6, name: "Cactus", price: 8, category: "Succulent" }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>Price: ${plant.price}</p>
          <button onClick={() => dispatch(addItem(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
