import React, { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PastorSection from "./components/PastorSection";
import LeadershipSection from "./components/LeadershipSection";
import ServicesSection from "./components/ServicesSection";
import SermonsSection from "./components/SermonsSection";
import GallerySection from "./components/GallerySection";
import AuxiliariesSection from "./components/AuxiliariesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GivingModal from "./components/GivingModal";

function App() {
  const [isGivingOpen, setIsGivingOpen] = useState(false);

  const openGiving = () => {
    setIsGivingOpen(true);
  };

  const closeGiving = () => {
    setIsGivingOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar onOpenGiving={openGiving} />

      {/* =====================================================
          MAIN WEBSITE
      ====================================================== */}
      <main>

        {/* 1. HERO */}
        <HeroSection onOpenGiving={openGiving} />

        {/* 2. ABOUT THE CHURCH */}
        <AboutSection />

        {/* 3. LEAD PASTOR */}
        <PastorSection />

        {/* 4. CHURCH LEADERSHIP */}
        <LeadershipSection />

        {/* 5. WORSHIP & SERVICE TIMES */}
        <ServicesSection />

        {/* 6. SERMONS & MESSAGES */}
        <SermonsSection />

        {/* 7. CHURCH GALLERY */}
        <GallerySection />

        {/* 8. CHURCH AUXILIARIES */}
        <AuxiliariesSection />

        {/* 9. CONTACT */}
        <ContactSection />

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer onOpenGiving={openGiving} />

      {/* =====================================================
          GIVING MODAL
      ====================================================== */}
      <GivingModal
        isOpen={isGivingOpen}
        onClose={closeGiving}
      />

    </div>
  );
}

export default App;