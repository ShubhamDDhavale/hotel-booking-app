import { Link } from "react-router-dom";
import { Hotel } from "../types/hotels";

const hotels: Hotel[] = [
  { id: 1, name: "Luxury Inn", price: 120, description: "5-star experience" },
  { id: 2, name: "Cozy Stay", price: 80, description: "Affordable and comfy" },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Available Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Link to={`/hotel/${hotel.id}`}>
              {hotel.name} - ${hotel.price} per night
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
