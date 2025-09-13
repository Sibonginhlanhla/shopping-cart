import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const cartCount = cart.length;

  return (
    <Router>
      {/* Pass cart + count to navbar */}
      <Navbar cartCount={cartCount} />

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Pass addToCart so Shop can update cart */}
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          {/* Pass cart + setCart so Cart page can modify */}
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
