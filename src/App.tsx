import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import HotelDetails from "./pages/HotelDetails";
import Bookings from "./pages/Bookings";
import "./App.css";

const App = () => { 
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotel/:id" element={<HotelDetails />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
