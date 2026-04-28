import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [img, setImg] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setImg(data.thumbnail);
      });
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow grid md:grid-cols-2 gap-6">

        <div>
          <img src={img} className="h-[350px] w-full object-cover rounded" />

          <div className="flex gap-2 mt-2">
            {product.images.map((i, idx) => (
              <img
                key={idx}
                src={i}
                onClick={() => setImg(i)}
                className="w-16 h-16 cursor-pointer border"
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-xl text-blue-600 font-bold mt-2">
            ₹ {product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 mt-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}