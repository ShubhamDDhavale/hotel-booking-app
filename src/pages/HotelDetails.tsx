import { useParams } from "react-router-dom";
import { Hotel } from "../types/hotels";

const hotels: Record<number, Hotel> = {
  1: { id: 1, name: "Luxury Inn", price: 120, description: "5-star experience" },
  2: { id: 2, name: "Cozy Stay", price: 80, description: "Affordable and comfy" },
};

const HotelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels[Number(id)];

  if (!hotel) return <h2>Hotel Not Found</h2>;

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <p>Price: ${hotel.price} per night</p>
    </div>
  );
};

export default HotelDetails;

