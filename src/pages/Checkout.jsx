import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, []);

  const id = Math.floor(Math.random() * 100000);

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <h2 className="text-3xl text-green-600">🎉 Order Placed!</h2>
      <p>Order ID: #{id}</p>
    </div>
  );
}