import { HourMap } from '@/utils/types';

export const hourlyMap: HourMap[] = [
  {
    time: '07:00'
  },
  {
    time: '08:00'
  },
  {
    time: '09:00'
  },
  {
    time: '10:00'
  },
  {
    time: '11:00'
  },
  {
    time: '12:00'
  },
  {
    time: '13:00'
  },
  {
    time: '14:00'
  },
  {
    time: '15:00'
  },
  {
    time: '16:00'
  },
  {
    time: '17:00'
  },
  {
    time: '18:00'
  },
  {
    time: '19:00'
  },
  {
    time: '20:00'
  },
  {
    time: '21:00'
  }
];

export const SupportedPayments: string[] = ['gcash', 'card'];
export const CacheTTL = 600;
export const ReservationDescription = 'Court/Facility Reservation';
export enum Reservation {
  Description = 'Court/Facility Reservation',
  Currency = 'PHP',
  TimeZone = 'Asia/Manila',
  Sort = 'startTime'
}
