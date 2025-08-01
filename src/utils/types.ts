export type CreateCheckoutArg = {
  successUrl: string;
  cancelUrl: string;
  totalAmount: number;
  details: {
    bookedDate: string;
    bookedTimes: number[];
  };
};

export type HourMap = {
  time: string;
  isAvailable?: boolean;
};

export type CheckoutCacheObj = {
  bookingId: string;
  checkoutId: string;
  bookingDate: string;
  timeSlotIndices: number[];
};

export type ValidateAPIResponse = {
  paymentId: string;
  bookingId: string;
};

export type CalendarEventsListParam = {
  from: number;
  to: number;
};

export type CalendarAddEventParam = {
  date: string;
  timeSlot: string;
  ref?: string[];
};

export type GetEventsListResponse = {
  dateFrom: string;
  dateTo: string;
  bookedHours: string[];
};

export type AddEventResponse = {
  success: boolean;
};

export type MemberInformation = {
  id: string;
  firstName: string;
  lastName: string;
};

export type BookingInformation = {
  bookingId: string;
  description: string | null;
  details: string | null;
  date: string;
  time: string;
  status: string;
  paymentRef: string;
};
