// Operating hours logic for Old English Bar & Grill - Area H, New Owerri, Imo State

export const OPERATING_HOURS = [
  { day: 'Monday', open: '07:00', close: '00:00', label: '7:00 AM – 12:00 AM' },
  { day: 'Tuesday', open: '07:00', close: '00:00', label: '7:00 AM – 12:00 AM' },
  { day: 'Wednesday', open: '07:00', close: '00:00', label: '7:00 AM – 12:00 AM' },
  { day: 'Thursday', open: '07:00', close: '00:00', label: '7:00 AM – 12:00 AM' },
  { day: 'Friday', open: '07:00', close: '00:00', label: '7:00 AM – 12:00 AM' },
  { day: 'Saturday', open: '07:00', close: '00:00', label: '7:00 AM – 12:00 AM' },
  { day: 'Sunday', open: '07:00', close: '00:00', label: '7:00 AM – 12:00 AM' },
];

export const getLiveBusinessStatus = () => {
  const now = new Date();
  const currentDayIndex = now.getDay(); // 0 is Sunday, 1 is Monday...
  
  // Map JS day (0 = Sun, 1 = Mon...) to our schedule array (0 = Mon, 6 = Sun)
  const scheduleIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;
  const todaySchedule = OPERATING_HOURS[scheduleIndex];

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMin] = todaySchedule.open.split(':').map(Number);
  const openTimeMinutes = openHour * 60 + openMin;

  let [closeHour, closeMin] = todaySchedule.close.split(':').map(Number);
  if (closeHour === 0) {
    closeHour = 24; // Midnight
  }
  const closeTimeMinutes = closeHour * 60 + closeMin;

  const isOpen = currentMinutes >= openTimeMinutes && currentMinutes < closeTimeMinutes;

  return {
    isOpen,
    statusText: isOpen ? 'OPEN NOW' : 'CLOSED NOW',
    hoursText: todaySchedule.label,
    todayName: todaySchedule.day,
  };
};
