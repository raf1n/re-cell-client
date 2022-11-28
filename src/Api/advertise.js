export const addAdvertiseData = (advertiseData) => {
  return fetch("https://re-cell-server.vercel.app/advertises", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
    },
    body: JSON.stringify(advertiseData),
  });
};
