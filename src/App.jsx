import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { RoomsGallerySection } from './components/RoomsGallerySection';
import { ApartmentsSection } from './components/ApartmentsSection';
import { EventsSection } from './components/EventsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { CsvUploaderModal } from './components/CsvUploaderModal';
import { ReservationModal } from './components/ReservationModal';
import { INITIAL_MENU_ITEMS } from './data/defaultMenu';
import { downloadSampleMenuCsv } from './utils/csvParser';

export function App() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS);
  const [isCustomMenuLoaded, setIsCustomMenuLoaded] = useState(false);

  // Modal States
  const [selectedDish, setSelectedDish] = useState(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [reservationInitialDish, setReservationInitialDish] = useState(null);
  const [reservationInitialZone, setReservationInitialZone] = useState(null);

  // Handlers
  const handleOpenReservation = (dish = null, zoneId = null) => {
    setReservationInitialDish(dish);
    setReservationInitialZone(zoneId);
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
    setReservationInitialDish(null);
    setReservationInitialZone(null);
  };

  const handleCsvParsed = (newItems) => {
    setMenuItems(newItems);
    setIsCustomMenuLoaded(true);
  };

  const handleResetDefaultMenu = () => {
    setMenuItems(INITIAL_MENU_ITEMS);
    setIsCustomMenuLoaded(false);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky Header */}
      <Navbar
        onOpenReservation={(zoneId) => handleOpenReservation(null, zoneId)}
        onOpenCsvUpload={() => setIsCsvModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <Hero onOpenReservation={() => handleOpenReservation()} />

        {/* Menu Section */}
        <MenuSection
          menuItems={menuItems}
          onSelectItem={(dish) => setSelectedDish(dish)}
          onReserveWithItem={(dish) => handleOpenReservation(dish)}
          onOpenCsvUpload={() => setIsCsvModalOpen(true)}
          onDownloadSampleCsv={downloadSampleMenuCsv}
          onResetDefaultMenu={handleResetDefaultMenu}
          isCustomMenuLoaded={isCustomMenuLoaded}
        />

        {/* Heritage & Bar Story Section */}
        <StorySection />

        {/* Rooms & Spaces Gallery Section */}
        <RoomsGallerySection
          onReserveRoom={(zoneId) => handleOpenReservation(null, zoneId)}
        />

        {/* Luxury Apartments Section (Coming Soon) */}
        <ApartmentsSection />

        {/* Private Events Section */}
        <EventsSection onOpenReservation={() => handleOpenReservation()} />

        {/* Location & Hours Section */}
        <LocationSection onOpenReservation={() => handleOpenReservation()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => handleOpenReservation()}
        onOpenCsvUpload={() => setIsCsvModalOpen(true)}
      />

      {/* Modals & Bottom Sheets */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveWithItem={(dish) => handleOpenReservation(dish)}
      />

      <CsvUploaderModal
        isOpen={isCsvModalOpen}
        onClose={() => setIsCsvModalOpen(false)}
        onCsvParsed={handleCsvParsed}
        onResetDefaultMenu={handleResetDefaultMenu}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
        initialItem={reservationInitialDish}
        initialZone={reservationInitialZone}
      />
    </div>
  );
}

export default App;
