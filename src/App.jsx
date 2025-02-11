import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
// import Heading from './Components/Heading';
// import Begining from './Components/Begining';
import Services from './Components/Services';
import WhyWe from './Components/WhyWe';
import Insights from './Components/Insights';
import StartPage from './Components/StartPage';
import AppFeatures from './Components/AppFeatures';
import AppDownload from './Components/AppDownload';
import Footer from './Components/Footer';
import CustomerReview from './Components/CustomerReview';
import Achievements from './Components/Achievements';
import Test from './Components/Test';
import PartnersSection from './Components/PartnersSection';
import AmbulanceBooking from './Components/AmbulanceBooking';


function App() {

  return (
    <>
      {/* <Navbar /> */}
      <StartPage />
      <Insights />
      {/* <Begining/> */}
      {/* <Heading/> */}
      <Services />
      <WhyWe />
      <AppFeatures />
      <AppDownload />
      <CustomerReview />
      <PartnersSection/>
      <Achievements />
      {/* <AmbulanceBooking/> */}
      {/* <Test/> */}
    </>
  );
}

export default App
