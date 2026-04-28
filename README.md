# 🛍️ ShopZone - E-Commerce Web App

## 🚀 Overview

ShopZone is a modern **E-commerce Single Page Application (SPA)** built using React.
Users can browse products, view details, add items to cart, and complete checkout with authentication.

---

## 🔥 Features

* 🏠 Home Page with clean UI
* 🛍️ Shop Page (API-based products)
* 🔍 Live Search Filtering
* 📄 Product Details Page (Dynamic Routing)
* 🖼️ Image Preview (click thumbnails)
* 🛒 Add to Cart (Context API)
* 🔢 Cart Quantity & Total Calculation
* 💾 Persistent Cart (localStorage)
* 🔐 Protected Checkout Route
* 👤 Guest Login System
* 🎉 Order Confirmation Page

---

## 🧠 Tech Stack

* React (Vite)
* React Router DOM
* Context API
* Tailwind CSS
* DummyJSON API

---

## 🌐 API Used

https://dummyjson.com/products

---

## 📁 Project Structure

src/
│── components/
│   └── ProductCard.jsx
│── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── Login.jsx
│── context/
│   └── CartContext.jsx
│── App.jsx
│── main.jsx

---

## ⚙️ Installation

```bash
npm install
npm run dev
```

---

## 🔐 Protected Route Logic

* User must login to access `/checkout`
* If not logged in → redirect to `/login`

---

## 💾 LocalStorage

* Cart data persists after refresh
* User login state also stored

---

## 🎯 Learning Outcomes

* React Router (SPA Navigation)
* Global State Management (Context API)
* API Integration
* Protected Routes
* Modern UI Design

---

## 🚀 Deployment

Deployed using Vercel

---

## 🎥 Demo

Link Here:-
[(https://shop-zone-sepia.vercel.app/)]
---

## 👨‍💻 Author

Shubham chaurasiya

---

## ⭐ If you like this project, give it a star!
