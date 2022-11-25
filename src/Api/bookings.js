export const addBookingData = (bookingData) => {
  return fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
};
