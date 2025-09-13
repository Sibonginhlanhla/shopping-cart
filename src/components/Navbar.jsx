import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback, useContext } from "react";
import { ShopContext } from "../App";
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useContext(ShopContext);
  const cartCount = cart.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🛒</span>
          <span className="logo-text">ShopEasy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
          >
            <span className="link-icon">🏠</span>
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`navbar-link ${isActive('/shop') ? 'active' : ''}`}
          >
            <span className="link-icon">🛍️</span>
            Shop
          </Link>
          <Link 
            to="/cart" 
            className={`navbar-link cart-link ${isActive('/cart') ? 'active' : ''}`}
          >
            <span className="link-icon">🛒</span>
            Cart
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`mobile-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-icon">🏠</span>
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`mobile-link ${isActive('/shop') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-icon">🛍️</span>
            Shop
          </Link>
          <Link 
            to="/cart" 
            className={`mobile-link ${isActive('/cart') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="link-icon">🛒</span>
            Cart
            {cartCount > 0 && (
              <span className="cart-badge mobile">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;