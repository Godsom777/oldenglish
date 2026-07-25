import React from 'react';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { StorySection } from '../components/StorySection';
import { RoomsGallerySection } from '../components/RoomsGallerySection';
import { ApartmentsSection } from '../components/ApartmentsSection';
import { EventsSection } from '../components/EventsSection';
import { LocationSection } from '../components/LocationSection';

export const HomePage = ({
  menuItems,
  onSelectItem,
  onReserveWithItem,
  onOpenReservation,
  onOpenCsvUpload,
  downloadSampleMenuCsv,
  handleResetDefaultMenu,
  isCustomMenuLoaded
}) => {
  return (
    <>
      <Hero onOpenReservation={onOpenReservation} />

      <MenuSection
        menuItems={menuItems}
        onSelectItem={onSelectItem}
        onReserveWithItem={onReserveWithItem}
        onOpenCsvUpload={onOpenCsvUpload}
        onDownloadSampleCsv={downloadSampleMenuCsv}
        onResetDefaultMenu={handleResetDefaultMenu}
        isCustomMenuLoaded={isCustomMenuLoaded}
      />

      <StorySection />

      <RoomsGallerySection
        onReserveRoom={(zoneId) => onOpenReservation(null, zoneId)}
      />

      <ApartmentsSection />

      <EventsSection onOpenReservation={onOpenReservation} />

      <LocationSection onOpenReservation={onOpenReservation} />
    </>
  );
};
