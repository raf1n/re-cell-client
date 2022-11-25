import axios from "axios";

export const addBookingData = (bookingData) => {
  return fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
};

export const getBookingData = (email) => {
  return axios.get(`http://localhost:5000/bookings?email=${email}`);
};
