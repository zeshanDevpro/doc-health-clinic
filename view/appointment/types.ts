export type AppointmentSlot = {
  time: string;
  available: boolean;
};

export type AppointmentBookingState = {
  date: Date | null;
  slot: string | null;
  department: string;
};
