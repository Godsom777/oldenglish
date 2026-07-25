import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { DishDetailModal } from './components/DishDetailModal';
import { CsvUploaderModal } from './components/CsvUploaderModal';
import { ReservationModal } from './components/ReservationModal';
import { INITIAL_MENU_ITEMS } from './data/defaultMenu';
import { downloadSampleMenuCsv } from './utils/csvParser';

// Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { StoryPage } from './pages/StoryPage';
import { BarPage } from './pages/BarPage';
import { RoomsPage } from './pages/RoomsPage';
import { ApartmentsPage } from './pages/ApartmentsPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';

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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
        {/* Sticky Header Navbar */}
        <Navbar
          onOpenReservation={(zoneId) => handleOpenReservation(null, zoneId)}
          onOpenCsvUpload={() => setIsCsvModalOpen(true)}
        />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  menuItems={menuItems}
                  onSelectItem={(dish) => setSelectedDish(dish)}
                  onReserveWithItem={(dish) => handleOpenReservation(dish)}
                  onOpenReservation={(dish, zoneId) => handleOpenReservation(dish, zoneId)}
                  onOpenCsvUpload={() => setIsCsvModalOpen(true)}
                  downloadSampleMenuCsv={downloadSampleMenuCsv}
                  handleResetDefaultMenu={handleResetDefaultMenu}
                  isCustomMenuLoaded={isCustomMenuLoaded}
                />
              }
            />

            <Route
              path="/menu"
              element={
                <MenuPage
                  menuItems={menuItems}
                  onSelectItem={(dish) => setSelectedDish(dish)}
                  onReserveWithItem={(dish) => handleOpenReservation(dish)}
                  onOpenCsvUpload={() => setIsCsvModalOpen(true)}
                  downloadSampleMenuCsv={downloadSampleMenuCsv}
                  handleResetDefaultMenu={handleResetDefaultMenu}
                  isCustomMenuLoaded={isCustomMenuLoaded}
                />
              }
            />

            <Route path="/story" element={<StoryPage />} />

            <Route
              path="/bar"
              element={
                <BarPage
                  onOpenReservation={(dish, zoneId) => handleOpenReservation(dish, zoneId)}
                />
              }
            />

            <Route
              path="/rooms"
              element={
                <RoomsPage
                  onOpenReservation={(dish, zoneId) => handleOpenReservation(dish, zoneId)}
                />
              }
            />

            <Route path="/apartments" element={<ApartmentsPage />} />

            <Route
              path="/events"
              element={
                <EventsPage
                  onOpenReservation={(dish, zoneId) => handleOpenReservation(dish, zoneId)}
                />
              }
            />

            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenReservation={(dish, zoneId) => handleOpenReservation(dish, zoneId)}
                />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer
          onOpenReservation={() => handleOpenReservation()}
          onOpenCsvUpload={() => setIsCsvModalOpen(true)}
        />

        {/* Global Modals & Overlays */}
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
    </BrowserRouter>
  );
}

export default App;
