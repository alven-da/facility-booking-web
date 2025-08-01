import moment from 'moment';

import { dayOfWeek } from '@/common/constants';

export const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0');

export const addDecimals = (num: number) => num.toFixed(2);

export const getDayFromString = (dateStr: string) => {
  return dayOfWeek[moment(dateStr).day()]?.substring(0, 3);
};

export const convert24Hrto12Hr = (time: string) => {
  const [hr = '', min = ''] = time.split(':');

  let hours = parseInt(hr);
  const amOrPm = parseInt(hr) >= 12 ? 'pm' : 'am';

  hours = hours % 12 || 12;

  return `${zeroPad(hours, 2)}:${zeroPad(parseInt(min), 2)} ${amOrPm}`;
};
