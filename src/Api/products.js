export const addproductData = (productData) => {
  return fetch("https://re-cell-server.vercel.app/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
    },
    body: JSON.stringify(productData),
  });
};

export const deleteProduct = (id) => {
  return fetch(`https://re-cell-server.vercel.app/products/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `bearer ${localStorage.getItem("recellaccessToken")}`,
    },
  });
};
