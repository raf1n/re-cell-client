export const addAdvertiseData = (advertiseData) => {
  return fetch("https://re-cell-server.vercel.app/advertises", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(advertiseData),
  });
};
