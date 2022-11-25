export const addproductData = (productData) => {
  return fetch("http://localhost:5000/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(productData),
  });
};

export const deleteProduct = (id) => {
  return fetch(`http://localhost:5000/products/${id}`, {
    method: "DELETE",
  });
};
