import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { apiSvcUrl } from '../../../common/config';
import { BookingInformation } from '../../../utils/types';

function Success() {
  const [searchParams] = useSearchParams();
  const [bookingInfo, setBookingInfo] = useState<
    BookingInformation | undefined
  >(undefined);

  const confirmationId = searchParams.get('id');

  useEffect(() => {
    if (!bookingInfo && confirmationId) {
      fetch(`${apiSvcUrl}/api/validate?confirmationId=${confirmationId}`, {
        method: 'post'
      })
        .then((response) => response.json())
        .then(({ data: { booking } }) => {
          const {
            bookingId,
            description,
            details,
            date,
            time,
            status,
            paymentRef
          } = booking;

          setBookingInfo({
            bookingId,
            date,
            description,
            details,
            paymentRef,
            status,
            time
          });
        });
    }
  }, []);

  return (
    <>
      {confirmationId ? (
        bookingInfo ? (
          <div>This is success page</div>
        ) : (
          <p>Validating....</p>
        )
      ) : (
        <div>
          Cannot validate your reservation. Please contact us at arc@gmail.com
        </div>
      )}
    </>
  );
}

export default Success;
