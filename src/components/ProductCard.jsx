import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <img
        src={product.thumbnail}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-blue-600 font-bold">₹ {product.price}</p>
      </div>
    </Link>
  );
}