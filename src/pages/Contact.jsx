import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload रोकता है
    setSubmitted(true); // success दिखाओ
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        
        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Us 📩
        </h2>

        {/* ✅ Success Message */}
        {submitted && (
          <p className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            🎉 Message sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            required
            className="w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl"
          >
            Send Message 🚀
          </button>
        </form>

      </div>
    </div>
  );
}