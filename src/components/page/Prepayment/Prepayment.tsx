import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { stylesheet } from 'astroturf';
import clsx from 'clsx';
import moment from 'moment';

import calendarIcon from '@/assets/calendar-icon.png';
import clockIcon from '@/assets/clock-icon.png';

import Button from '@/components/ui/Button/Button';

import { apiSvcUrl } from '@/common/config';
import { pesoCurrencyText } from '@/common/constants';
import { addDecimals, getDayFromString } from '@/utils/util';
import { hourlyMap } from '@/utils/maps';

const styles = stylesheet`
  @use '../../../style/imports' as *;

  .heading {
    text-align: center;
  }

  .wrapper {
    text-align: center;
  }

  .table {
    table-layout: auto;
    margin: 0 auto;
    text-align: center;
  }

  .row {
    display: table-row;
    width: 100%;
  }

  .col {
    display: table-cell;
    min-height: 40px;
    text-align: left;
    width: 80%;

    &-icon {
      width: 20%;
      padding-right: 12px;
    }

    &-text {
      text-align: right;
    }

    &-total {
      text-align: right !important;
      
    }
  }

  .icon {
    width: 35px;
    height: 35px;
  }

  .button {
    width: 35%;
    display: inline-block;
    text-align: center;
    margin-top: 42px;
  }
`;

function Prepayment() {
  const {
    state: { dateSelected, timeIndices }
  } = useLocation();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const paymentHandler = () => {
    fetch(`${apiSvcUrl}/api/prepayment`, {
      body: JSON.stringify({
        date: dateSelected,
        index: timeIndices,
        totalAmount
      }),
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(({ data }) => {
        window.location.replace(data.redirectUrl);
      });
  };

  useEffect(() => {
    if (dateSelected && timeIndices) {
      setTotalAmount(150);
    }
  }, [dateSelected, timeIndices]);

  return (
    <>
      <h2 className={styles['heading']}>Review & Pay</h2>
      <div className={styles['wrapper']}>
        <table className={styles['table']}>
          <tr className={styles['row']}>
            <td className={clsx(styles['col'], styles['col-icon'])}>
              <img src={calendarIcon} className={styles['icon']} />
            </td>
            <td className={clsx(styles['col'], styles['col-text'])}>
              {moment(dateSelected).format('DD MMMM YYYY')} (
              {getDayFromString(dateSelected)})
            </td>
          </tr>
          <tr className={styles['row']}>
            <td className={clsx(styles['col'], styles['col-icon'])}>
              <img src={clockIcon} className={styles['icon']} />
            </td>
            <td className={clsx(styles['col'], styles['col-text'])}>
              {hourlyMap[timeIndices]?.time}
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <hr />
            </td>
          </tr>
          <tr className={styles['row']}>
            <td className={clsx(styles['col'], styles['col-icon'])}></td>
            <td className={clsx(styles['col'], styles['col-total'])}>
              <div
                style={{
                  display: 'inline-block',
                  float: 'left',
                  fontWeight: 800
                }}
              >
                Total
              </div>
              <div style={{ display: 'inline-block', float: 'right' }}>
                {`${pesoCurrencyText}${addDecimals(totalAmount)}`}
              </div>
            </td>
          </tr>
        </table>
        <div className={styles['button']}>
          <Button text={'Proceed to Payment'} onclickHandler={paymentHandler} />
        </div>
      </div>
    </>
  );
}

export default Prepayment;
