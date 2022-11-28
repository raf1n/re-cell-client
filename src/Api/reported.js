export const addReportedData = (reportedData) => {
  return fetch("https://re-cell-server.vercel.app/reporteditem", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
    },
    body: JSON.stringify(reportedData),
  });
};
