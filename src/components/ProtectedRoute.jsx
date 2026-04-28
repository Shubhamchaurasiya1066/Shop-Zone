import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(CartContext);

  return user ? children : <Navigate to="/login" />;
}