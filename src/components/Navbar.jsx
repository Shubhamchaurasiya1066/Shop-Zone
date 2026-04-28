import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">ShopZone</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="relative">
          Cart
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}