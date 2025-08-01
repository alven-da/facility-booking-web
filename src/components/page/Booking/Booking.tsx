import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import clsx from 'clsx';

import leftIcon from '@/assets/angle-left-icon.png';
import rightIcon from '@/assets/angle-right-icon.png';

import { useNavigate } from 'react-router-dom';
import { stylesheet } from 'astroturf';

import TimeSlot from '../../TimeSlot/TimeSlot';
import { apiSvcUrl } from '../../../common/config';
import Button from '../../ui/Button/Button';
import Preloader from '../../ui/Preloader/Preloader';
import { getDayFromString } from '../../../utils/util';

const style = stylesheet`
  @use '../../../style/imports' as *;

  .date-row {
    display: block;
    padding: 15px;
  }

  .date-col {
    display: inline-block;
    min-height: 30px;
  }

  .date-nav {
    width: 10%;

    &-prev {
      text-align: left;
    }

    &-next {
      text-align: right;
    }
  }

  .date-current {
    width: 80%;
    text-align: center;
    font-size: $font-size-medium;
  }

  .next-step-wrapper {
    margin-top: 20px;

    .next-step-container {
      width: 80%;
      margin: 0 auto;
    }
  }

  .loader-wrapper {
    margin-top: 50px;
  }

  .time-slot-wrapper {
    width: 80%;
    margin: 0 auto;
  }
`;

type TimeSlot = {
  time: string;
  isAvailable: boolean;
};

const getFormattedDate = (dateArg?: Date): string => {
  return moment(dateArg || new Date()).format('YYYY-MM-DD');
};

export function Booking() {
  const navigate = useNavigate();
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [dateSelected, setDateSelected] = useState<string>(
    getFormattedDate(new Date())
  );

  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number | null>(
    null
  );

  const NAV_WIDTH = 16;
  const NAV_HEIGHT = 24;

  useEffect(() => {
    fetch(`${apiSvcUrl}/api/calendar?selectedDate=${dateSelected}`) // Relative URL to your API route
      .then((response) => response.json())
      .then(({ data: slots = [] }) => {
        setTimeSlots(slots);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [dateSelected]);

  const onChangeDateHandler = useCallback(
    (dayChange: number) => {
      const changedDateStr = getFormattedDate(
        moment(dateSelected).add(dayChange, 'd').toDate()
      );

      setTimeSlots([]);
      setSelectedTimeIndex(null);
      setDateSelected(changedDateStr);
    },
    [dateSelected]
  );

  const onPaymentHandler = () => {
    navigate('/prepayment', {
      state: {
        dateSelected,
        timeIndices: selectedTimeIndex
      }
    });
  };

  const onSelectTimeHandler = useCallback(
    (idx: number) => {
      setSelectedTimeIndex((prev) => (prev === idx ? null : idx));
    },
    [setSelectedTimeIndex]
  );

  return (
    <div className={style.bookingWrapper}>
      <div className={style.dateTable}>
        <div className={style['date-row']}>
          <div
            className={clsx(
              style['date-col'],
              style['date-nav'],
              style['date-nav-prev']
            )}
          >
            <img
              onClick={() => onChangeDateHandler(-1)}
              src={leftIcon}
              width={NAV_WIDTH}
              height={NAV_HEIGHT}
            />
          </div>
          <div className={clsx(style['date-col'], style['date-current'])}>
            {moment(dateSelected).format('DD-MMMM-YYYY').toUpperCase()} (
            {getDayFromString(dateSelected)})
          </div>
          <div
            className={clsx(
              style['date-col'],
              style['date-nav'],
              style['date-nav-next']
            )}
          >
            <img
              onClick={() => onChangeDateHandler(1)}
              src={rightIcon}
              width={NAV_WIDTH}
              height={NAV_HEIGHT}
            />
          </div>
        </div>
      </div>
      {timeSlots && timeSlots.length ? (
        <>
          <div className={clsx(style['time-slot-wrapper'])}>
            {timeSlots.map(({ time: timeText, isAvailable }, idx) => {
              return (
                <TimeSlot
                  selected={selectedTimeIndex === idx}
                  indexAt={idx}
                  isAvailable={isAvailable}
                  timeText={timeText}
                  onSelectTimeHandler={onSelectTimeHandler}
                />
              );
            })}
          </div>
          <div className={style['next-step-wrapper']}>
            <div className={style['next-step-container']}>
              <Button
                text="Review & Pay"
                onclickHandler={onPaymentHandler}
                isDisabled={!selectedTimeIndex}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={style['loader-wrapper']}>
          <Preloader text="FETCHING TIME SLOTS" />
        </div>
      )}
    </div>
  );
}

export default Booking;
