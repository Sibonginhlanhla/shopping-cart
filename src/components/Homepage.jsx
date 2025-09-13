import './Homepage.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="welcome-title">Welcome to Your Shopping Paradise!</h2>
          
          <p className="welcome-description">
            Discover amazing deals and top-quality products at unbeatable prices.
            Browse through our carefully curated collection and find everything you need.
            Start shopping now and fill your cart with joy!
          </p>
          
          <div className="cta-buttons">
            <a href="/shop" className="cta-primary">
              Start Shopping
            </a>
            <a href="#features" className="cta-secondary">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-icon">📱</div>
            <span>Mobile App</span>
          </div>
          <div className="floating-card">
            <div className="card-icon">🚚</div>
            <span>Fast Delivery</span>
          </div>
          <div className="floating-card">
            <div className="card-icon">💳</div>
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
      
      <section id="features" className="features-section">
        <div className="features-container">
          <h3 className="features-title">Why Choose ShopEasy?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Lightning Fast</h4>
              <p>Quick browsing and instant checkout process</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h4>Secure Shopping</h4>
              <p>Your data and payments are always protected</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Quality Products</h4>
              <p>Carefully curated items from trusted brands</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;