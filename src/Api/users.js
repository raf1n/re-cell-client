export const saveUser = (userInfo) => {
  fetch("https://re-cell-server.vercel.app/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
