import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div>
        <video autoPlay loop muted className="w-full">
          <source
            src="https://cms.omeralpg.com/admin/uploads/page/home/1675056149DIeHx.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
      <ToastContainer position="top-center" draggable={true} autoClose={3000} />
    </div>
  );
};

export default Home;
