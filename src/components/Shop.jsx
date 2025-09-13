import React, { useState, useEffect } from "react";
import './Shop.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        {isLoading && <div className="image-skeleton"></div>}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          onLoad={handleImageLoad}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
        <div className="product-category">{product.category}</div>
      </div>

      {/* Product Content */}
      <div className="product-content">
        {/* Product Title */}
        <h3 className="product-title" title={product.title}>
          {truncateText(product.title, 50)}
        </h3>

        {/* Product Description */}
        <p className="product-description">
          {truncateText(product.description, 125)}
        </p>

        {/* Product Price */}
        <div className="product-price">
          <span className="price-symbol">R</span>
          <span className="price-amount">{product.price.toFixed(2)}</span>
        </div>

        {/* Quantity Controls */}
        <div className="quantity-controls">
          <label className="quantity-label">Quantity:</label>
          <div className="quantity-input-group">
            <button
              onClick={decrement}
              className="quantity-btn quantity-btn-minus"
            >
              −
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                const val = Math.max(1, parseInt(e.target.value) || 1);
                setQuantity(val);
              }}
              className="quantity-input"
              min="1"
            />
            <button
              onClick={increment}
              className="quantity-btn quantity-btn-plus"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product, quantity)}
          className="add-to-cart-btn"
        >
          <span className="btn-icon">🛒</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="shop-container">
        <div className="shop-header">
          <h1 className="shop-title">Our Products</h1>
          <p className="shop-subtitle">Loading amazing products for you...</p>
        </div>
        <div className="products-grid">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="product-skeleton">
              <div className="skeleton-image"></div>
              <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-description"></div>
                <div className="skeleton-price"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-container">
        <div className="error-message">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1 className="shop-title">Our Products</h1>
        <p className="shop-subtitle">
          Discover {products.length} amazing products at great prices
        </p>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;