import React from "react";
import AdvertiseProducts from "../../Components/AdvertiseProducts/AdvertiseProducts";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Testimonial></Testimonial>
      <AdvertiseProducts></AdvertiseProducts>
    </div>
  );
};

export default Home;
