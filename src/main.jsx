import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import AmbulanceServiceSection from './Components/AmbulancServices/AmbulanceService.jsx';
import OxyzenAmbulance from './Components/AmbulancServices/OxyzenAmbulance.jsx';
import { VentilatorAmbulance } from './Components/AmbulancServices/VentilatorAmbulance.jsx';
import MortuaryService from './Components/AmbulancServices/MortuaryService.jsx';
import DeadBox from './Components/AmbulancServices/DeadBox.jsx';
import BikeAmbulance from './Components/AmbulancServices/BikeAmbulance.jsx';
import Aboutus from './Components/FooterSection/Aboutus.jsx';
import CareerPage from './Components/FooterSection/CareerPage.jsx';
import Enterprise from './Components/FooterSection/Enterprise.jsx';
import Individual from './Components/FooterSection/Individual.jsx';
import Hospital from './Components/FooterSection/Hospital.jsx';
import Training from './Components/FooterSection/Training.jsx';
import ContactUs from './Components/FooterSection/ContactUs.jsx';
import OurTeam from './Components/FooterSection/OurTeam.jsx';
import Footer from './Components/Footer.jsx';
import LoginPage from './UserProfile/LoginPage.jsx';
import RideBooking from './UserProfile/Booking.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basicsupport" element={<AmbulanceServiceSection />} />
        <Route path="/oxyzenambulanceservice" element={<OxyzenAmbulance />} />
        <Route
          path="/ventilatorambulanceservice"
          element={<VentilatorAmbulance />}
        />
        <Route path="/mortuaryambulanceservice" element={<MortuaryService />} />
        <Route path="/deadboxservice" element={<DeadBox />} />
        <Route path="/bikeambulanceservice" element={<BikeAmbulance />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/Careers" element={<CareerPage />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path = "booking" element = {<RideBooking/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);