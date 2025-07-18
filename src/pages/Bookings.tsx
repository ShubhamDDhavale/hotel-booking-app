import { Link } from "react-router-dom";
import "./Bookings.css";

const Bookings: React.FC = () => {
  return (
    <div className="bookings">
      <div className="bookings-header">
        <h1>My Bookings</h1>
        <p>Manage your hotel reservations and upcoming stays</p>
      </div>
      
      <div className="bookings-content">
        <div className="empty-bookings">
          <div className="empty-icon">📋</div>
          <h2>No Bookings Yet</h2>
          <p>You haven't made any bookings yet. Start exploring our amazing hotels!</p>
          <Link to="/" className="explore-hotels-btn">
            Explore Hotels
          </Link>
        </div>
        
        <div className="bookings-info">
          <h3>Why Book with Us?</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">🔒</span>
              <h4>Secure Booking</h4>
              <p>Your payment information is protected with bank-level security</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💰</span>
              <h4>Best Prices</h4>
              <p>We guarantee the best rates for all our partner hotels</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <h4>Instant Confirmation</h4>
              <p>Get immediate booking confirmation and reservation details</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📞</span>
              <h4>24/7 Support</h4>
              <p>Our customer service team is available around the clock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

  