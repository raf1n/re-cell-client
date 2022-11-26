import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addproductData } from "../../../Api/products";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddAProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const imageBBKey = process.env.REACT_APP_imgbb_api_key;
  const postedDate = format(new Date(), "Pp");
  const handleAddProduct = (e) => {
    e.preventDefault();
    const selected = e.target.category.value;
    console.log(selected);
    const selectedValue = selected.split(" ");
    console.log(selectedValue[0]);
    const categoryName = selectedValue[0];
    const categoryId = selectedValue[1];
    console.log(selectedValue[1]);
    const form = e.target;
    const image = e.target.imageURL.files[0];
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    fetch(`https://api.imgbb.com/1/upload?key=${imageBBKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const productDetails = {
          sellerEmail: user?.email,
          sellerName: user?.displayName,
          productName: form.productName.value,
          originalPrice: form.originalPrice.value,
          resalePrice: form.resalePrice.value,
          productCondition: form.condition.value,
          categoryName: categoryName,
          categoryId: categoryId,
          productImage: data?.data?.url,
          location: form.location.value,
          phone: form.phone.value,
          description: form.description.value,
          yearsOfUse: form.yearsOfUse.value,
          condition: form.condition.value,
          postedDate,
        };
        console.log(productDetails);
        addproductData(productDetails)
          .then((res) => res.json())
          .then((data) => {
            toast.success("Product Added Successfully");
            form.reset();
            navigate("/dashboard/myproducts");
          });
      });
  };
  return (
    <div>
      <h2 className="mb-2 text-3xl text-center font-semibold leading-tight">
        Add A Product
      </h2>
      <div className="flex w-full max-w-md mx-auto bg-white rounded-lg shadow-lg lg:max-w-xl my-6">
        <div className="w-full px-6 py-2 md:px-8">
          <form onSubmit={handleAddProduct} className="grid grid-cols-1 mt-6">
            <label className="label">
              <span className="label-text font-semibold text-base">
                Product Name
              </span>
            </label>
            <input
              name="productName"
              type="text"
              placeholder="Item Name"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Product Image
              </span>
            </label>
            <input
              required
              type="file"
              id="image"
              accept="image/*"
              name="imageURL"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Product Original Price
              </span>
            </label>
            <input
              name="originalPrice"
              type="text"
              placeholder="Original Price"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Product resale Price
              </span>
            </label>
            <input
              name="resalePrice"
              type="text"
              placeholder="Resale Price"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Product Condition
              </span>
            </label>
            <select
              name="condition"
              className="select select-bordered select-md w-full max-w-xs"
            >
              <option defaultValue>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
            <label className="label">
              <span className="label-text font-semibold text-base">
                Years of use
              </span>
            </label>
            <input
              name="yearsOfUse"
              type="text"
              placeholder="Price"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Your Phone Number
              </span>
            </label>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Location
              </span>
            </label>
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <label className="label">
              <span className="label-text font-semibold text-base">
                Category
              </span>
            </label>
            <select
              name="category"
              className="select select-bordered select-md w-full max-w-xs"
            >
              <option value="Iphone 637f2a6dea92b4946a46c675" defaultValue>
                Iphone
              </option>
              <option value="Android 637f2a6dea92b4946a46c676">Android</option>
              <option value="Basic 637f2a6dea92b4946a46c677">
                Basic Phone
              </option>
            </select>
            <label className="label">
              <span className="label-text font-semibold text-base">
                Description
              </span>
            </label>
            <textarea
              className="border rounded-md border-gray-300 p-5"
              name="description"
              cols="10"
              rows="4"
            ></textarea>
            <br />
            <input className="btn btn-sm w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
