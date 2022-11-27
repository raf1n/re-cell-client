export const saveUser = (userInfo) => {
  const currentUser = {
    email: userInfo.email,
  };
  fetch(`http://localhost:5000/users/${userInfo.userEmail}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userInfo, currentUser }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.token);
    });
};
