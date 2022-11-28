export const addBookingData = (bookingData) => {
  return fetch("https://re-cell-server.vercel.app/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
};
