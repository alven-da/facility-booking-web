# Sports Booking Web

A simple sports facility booking/reservation app.

This is created using the following stack:

- React.js
- Astroturf - CSS-in-JS styling
- Google Calendar - For date and time slot booking
- PayMongo - Payment gateway for reservation

Environment variable to use as follows:

```
NODE_ENV=development|production
API_SVC_URL=<Backend API base URL>
APP_TITLE=<Title or Header Text>
```

The app workflow is as follows:

1. Landing page - select whether you are a member (can be a club member) or a guest who will use the facility (e.g. can be a badminton court facility or a basketball facility).

2. Personal Information

A) If **Member** is selected - enter your member ID and `/api/member/:memberId` endpoint will be called and validate the membership

- If member ID is found, it will navigate to the date and time slot selection
- If member ID not found, it will show an error message and it will not proceed to the next page.

B) [Not yet implemented] If **Guest** is selected - it will navigate to a personal information page to fill out the necessary information e.g. name and phone number

3. Date and Time selection page - allows the user to choose date and time to book the facility. Each time slot is on per hour basis and a slot will appear in grey (disabled) if the time is already booked.

It calls the `/api/calendar?selectedDate={YYYY-MM-DD}` endpoint to fetch time slots.

For now, the time booking is only limited to one hour. Future improvements will be to select multiple time slots.

4. Review & Pay - this page will show you the date and time you booked, and the amount to pay to confirm the reservation.

5. Redirect to Payment Gateway - calls the `/api/prepayment` endpoint and returns the checkout URL.

Currently, the payment gateway used in this project is [PayMongo](https://www.paymongo.com/), a Philippine-based payment solution for businesses and individuals.

6. Payment and Reservation Confirmation

A) After settling the payment, it will be redirected to a confirmation page, with confirmation ID and payment reference.

B) If there are no payments made, it will be redirected to an error page.
