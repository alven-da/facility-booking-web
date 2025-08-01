import React, { useState } from 'react';

import { stylesheet } from 'astroturf';
import clsx from 'clsx';

const styles = stylesheet`
  @use '../../style/imports' as *;

  .time-slot-container {
    border-radius: 8px;
    border: 1px solid $green-default;
    color: #000;
    font-weight: 800;
    padding: 5px;

    text-align: center;

    margin: 7px;

    &-selected {
      background-color: $green-default;
      color: white;
    }
  }

  .time-slot-disabled {
    border: 1px solid $grey-lighter;
    color: $grey-default;
    pointer-events: none;
  }
`;

type TimeSlotProps = {
  timeText: string;
  isAvailable: boolean;
  indexAt: number;
  selected: boolean;
  onSelectTimeHandler: (idx: number) => void;
};

const TimeSlot = React.memo(
  ({
    timeText,
    isAvailable,
    indexAt,
    selected,
    onSelectTimeHandler
  }: TimeSlotProps) => {
    return (
      <div
        onClick={() => {
          onSelectTimeHandler(indexAt);
        }}
        className={clsx(
          styles['time-slot-container'],
          !isAvailable && styles['time-slot-disabled'],
          selected ? styles['time-slot-container-selected'] : ''
        )}
      >
        <p>{timeText}</p>
      </div>
    );
  }
);

export default TimeSlot;
