import { useEffect, useState } from "react";
const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://re-cell-server.vercel.app/jwt?email=${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.accessToken) {
            localStorage.setItem("recellaccessToken", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
