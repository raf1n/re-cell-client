export const addReportedData = (reportedData) => {
  return fetch("http://localhost:5000/reporteditem", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(reportedData),
  });
};
