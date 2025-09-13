import { useState, useContext } from 'react';
import { ShopContext } from '../App';
import '../styles/Cart.css';

function Cart() {
  const { cart, setCart } = useContext(ShopContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const increment = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Thank you for your purchase! Your order has been placed.');
    clearCart();
    setIsCheckingOut(false);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const tax = total * 0.08; // 8% tax
  const shipping = total > 50 ? 0 : 9.99;
  const finalTotal = total + tax + shipping;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">
          <span className="cart-icon">🛒</span>
          Your Shopping Cart
        </h1>
        <p className="cart-subtitle">
          {cart.length === 0 
            ? "Your cart is waiting to be filled!" 
            : `${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart`
          }
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛍️</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <a href="/shop" className="continue-shopping-btn">
            <span className="btn-icon">🔍</span>
            Start Shopping
          </a>
        </div>
      ) : (
        <div className="cart-content">
          {/* Cart Items */}
          <div className="cart-items">
            <div className="cart-items-header">
              <h3>Items in Your Cart</h3>
              <button 
                onClick={clearCart}
                className="clear-cart-btn"
                title="Clear all items"
              >
                <span className="btn-icon">🗑️</span>
                Clear Cart
              </button>
            </div>

            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="item-image"
                    />
                    <div className="item-category">{item.category}</div>
                  </div>

                  <div className="item-details">
                    <h4 className="item-title" title={item.title}>
                      {truncateText(item.title, 60)}
                    </h4>
                    <p className="item-description">
                      {truncateText(item.description, 100)}
                    </p>
                    <div className="item-price">
                      <span className="price-label">Unit Price:</span>
                      <span className="price-value">R{item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="item-controls">
                    <div className="quantity-section">
                      <label className="quantity-label">Quantity:</label>
                      <div className="quantity-controls">
                        <button
                          onClick={() => decrement(item.id)}
                          className="quantity-btn minus"
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="quantity-input"
                          min="1"
                        />
                        <button
                          onClick={() => increment(item.id)}
                          className="quantity-btn plus"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="item-total">
                      <span className="total-label">Subtotal:</span>
                      <span className="total-value">
                        R{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="remove-btn"
                      title="Remove item"
                    >
                      <span className="btn-icon">🗑️</span>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <h3 className="summary-title">Order Summary</h3>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal ({itemCount} items):</span>
                <span>R{total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (8%):</span>
                <span>R{tax.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>
                  {shipping === 0 ? (
                    <span className="free-shipping">FREE</span>
                  ) : (
                    `R${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <div className="shipping-note">
                  <small>💡 Free shipping on orders over R50!</small>
                </div>
              )}
              <hr className="summary-divider" />
              <div className="summary-row total-row">
                <span>Total:</span>
                <span className="final-total">R{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="checkout-section">
              <button 
                onClick={handleCheckout}
                className={`checkout-btn ${isCheckingOut ? 'loading' : ''}`}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <>
                    <span className="loading-spinner"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">💳</span>
                    Checkout Now
                  </>
                )}
              </button>

              <div className="payment-methods">
                <p>We accept:</p>
                <div className="payment-icons">
                  <span>💳</span>
                  <span>🏦</span>
                  <span>📱</span>
                  <span>💰</span>
                </div>
              </div>
            </div>

            <a href="/shop" className="continue-shopping">
              <span className="btn-icon">🔙</span>
              Continue Shopping
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;