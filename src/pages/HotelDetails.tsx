import { useParams, Link } from "react-router-dom";
import { Hotel } from "../types/hotels";
import "./HotelDetails.css";

const hotels: Record<number, Hotel> = {
  1: { 
    id: 1, 
    name: "Luxury Inn", 
    price: 120, 
    description: "5-star experience with premium amenities and stunning views",
    image: "🏨"
  },
  2: { 
    id: 2, 
    name: "Cozy Stay", 
    price: 80, 
    description: "Affordable and comfy accommodation perfect for families",
    image: "🏠"
  },
  3: { 
    id: 3, 
    name: "Business Plaza", 
    price: 150, 
    description: "Modern business hotel with conference facilities",
    image: "🏢"
  },
  4: { 
    id: 4, 
    name: "Seaside Resort", 
    price: 200, 
    description: "Beachfront luxury resort with spa and pool access",
    image: "🏖️"
  },
};

const HotelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels[Number(id)];

  if (!hotel) {
    return (
      <div className="hotel-details">
        <div className="not-found">
          <h2>Hotel Not Found</h2>
          <p>The hotel you're looking for doesn't exist.</p>
          <Link to="/" className="back-btn">Back to Hotels</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="hotel-details">
      <div className="hotel-details-header">
        <Link to="/" className="back-btn">
          ← Back to Hotels
        </Link>
      </div>
      
      <div className="hotel-details-content">
        <div className="hotel-hero">
          <div className="hotel-hero-image">
            <span className="hotel-emoji-large">{hotel.image}</span>
          </div>
          <div className="hotel-hero-info">
            <h1>{hotel.name}</h1>
            <p className="hotel-description-large">{hotel.description}</p>
            <div className="hotel-price-large">${hotel.price} per night</div>
          </div>
        </div>
        
        <div className="hotel-actions">
          <button className="book-now-btn">
            Book Now
          </button>
          <button className="add-to-favorites-btn">
            ❤️ Add to Favorites
          </button>
        </div>
        
        <div className="hotel-amenities">
          <h3>Amenities</h3>
          <div className="amenities-grid">
            <div className="amenity-item">🛏️ Free WiFi</div>
            <div className="amenity-item">🏊 Swimming Pool</div>
            <div className="amenity-item">🍽️ Restaurant</div>
            <div className="amenity-item">🚗 Free Parking</div>
            <div className="amenity-item">🏋️ Gym</div>
            <div className="amenity-item">🛎️ Room Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;

