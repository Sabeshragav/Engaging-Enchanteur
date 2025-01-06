import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import About from "./Components/About";
import Collections from "./Components/Collections";
import Footer from "./Components/Footer";
import CollectionItems from "./pages/CollectionItems";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:id" element={<CollectionItems />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  </StrictMode>
);
