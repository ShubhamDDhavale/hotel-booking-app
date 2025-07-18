import { Link } from "react-router-dom";
import { Hotel } from "../types/hotels";
import "./Home.css";

const hotels: Hotel[] = [
  { 
    id: 1, 
    name: "Luxury Inn", 
    price: 120, 
    description: "5-star experience with premium amenities and stunning views",
    image: "🏨"
  },
  { 
    id: 2, 
    name: "Cozy Stay", 
    price: 80, 
    description: "Affordable and comfy accommodation perfect for families",
    image: "🏠"
  },
  { 
    id: 3, 
    name: "Business Plaza", 
    price: 150, 
    description: "Modern business hotel with conference facilities",
    image: "🏢"
  },
  { 
    id: 4, 
    name: "Seaside Resort", 
    price: 200, 
    description: "Beachfront luxury resort with spa and pool access",
    image: "🏖️"
  },
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Discover Amazing Hotels</h1>
        <p>Find your perfect stay from our curated collection of hotels</p>
      </div>
      
      <div className="hotels-grid">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <div className="hotel-image">
              <span className="hotel-emoji">{hotel.image}</span>
            </div>
            <div className="hotel-content">
              <h3 className="hotel-name">{hotel.name}</h3>
              <p className="hotel-description">{hotel.description}</p>
              <div className="hotel-footer">
                <span className="hotel-price">${hotel.price}/night</span>
                <Link to={`/hotel/${hotel.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
