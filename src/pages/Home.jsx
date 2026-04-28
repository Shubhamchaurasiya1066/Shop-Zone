export default function Home() {
  return (
    <div className="relative h-screen w-full">

      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay (dark effect) */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Shop Smarter <br /> Live Better 🛒
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
          Discover premium products with best deals and lightning fast delivery.
        </p>

        <div className="flex gap-4">
          <a
            href="/shop"
            className="bg-blue-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Shop Now
          </a>

          <a
            href="/contact"
            className="border border-white px-8 py-3 rounded-xl text-lg hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}