export const addAdvertiseData = (advertiseData) => {
  return fetch("http://localhost:5000/advertises", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(advertiseData),
  });
};
