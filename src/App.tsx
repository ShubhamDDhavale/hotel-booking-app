import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import HotelDetails from "./pages/HotelDetails";
import Bookings from "./pages/Bookings";

const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
};

export default App;
