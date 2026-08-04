import React from 'react';
import { Hero } from '../components/Hero';
import { HomeTeasers } from '../components/HomeTeasers';

export const HomePage = ({
  menuItems,
  onSelectItem,
  onReserveWithItem,
  onOpenReservation,
}) => {
  return (
    <>
      <Hero onOpenReservation={onOpenReservation} />
      <HomeTeasers
        menuItems={menuItems}
        onSelectItem={onSelectItem}
        onReserveWithItem={onReserveWithItem}
        onOpenReservation={onOpenReservation}
      />
    </>
  );
};

