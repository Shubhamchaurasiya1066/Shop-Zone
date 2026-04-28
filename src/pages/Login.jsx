import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <button
        onClick={() => {
          setUser(true);
          navigate("/checkout");
        }}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Login as Guest
      </button>
    </div>
  );
}