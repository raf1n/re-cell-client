export const addReportedData = (reportedData) => {
  return fetch("https://re-cell-server.vercel.app/reporteditem", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(reportedData),
  });
};
