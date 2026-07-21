// Live operating hours logic for Old English Bar & Grill

export const OPERATING_HOURS = [
  { day: 'Monday', open: '16:00', close: '00:00', label: '4:00 PM – 12:00 AM' },
  { day: 'Tuesday', open: '16:00', close: '00:00', label: '4:00 PM – 12:00 AM' },
  { day: 'Wednesday', open: '16:00', close: '00:00', label: '4:00 PM – 12:00 AM' },
  { day: 'Thursday', open: '16:00', close: '01:00', label: '4:00 PM – 1:00 AM' },
  { day: 'Friday', open: '15:00', close: '02:00', label: '3:00 PM – 2:00 AM' },
  { day: 'Saturday', open: '13:00', close: '02:00', label: '1:00 PM – 2:00 AM' },
  { day: 'Sunday', open: '13:00', close: '00:00', label: '1:00 PM – 12:00 AM' },
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
  if (closeHour < openHour) {
    // Closes past midnight
    closeHour += 24;
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
