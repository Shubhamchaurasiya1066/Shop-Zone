import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const remove = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  if (cart.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col justify-center items-center text-gray-500">
        <h2 className="text-3xl font-bold mb-2">🛒 Your Cart is Empty</h2>
        <p>Add some products to see them here</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Your Cart 🛒</h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT: Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    ₹ {item.price} × {item.quantity}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-4">
                <p className="font-bold text-blue-600">
                  ₹ {item.price * item.quantity}
                </p>

                <button
                  onClick={() => remove(item.id)}
                  className="text-red-500 hover:text-red-700 text-lg"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Summary */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-bold text-lg">₹ {total}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}