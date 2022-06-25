import React from "react";
import BrowseByBudgetCard from "../components/BrowseByBudgetCard/BrowseByBudgetCard";
import CustomCarousel from "../components/Carousel/Carousel";
import DesktopMultiCarousel from "../components/Carousel/DesktopMultiCarousel";

function Home() {
  return (
    <div className="w-full grid grid-cols-12 my-10">
      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10">
        <CustomCarousel />
        <div className="flex flex-col gap-2">
          <div className="border-l-4 border-pink-600 pl-2">
            Browse By Brands
          </div>
          <DesktopMultiCarousel />
        </div>
        <div className="flex flex-col gap-2">
          <div className="border-l-4 border-pink-600 pl-2">
            Browse By Brands
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <BrowseByBudgetCard />
            <BrowseByBudgetCard />
            <BrowseByBudgetCard />
            <BrowseByBudgetCard />
            <BrowseByBudgetCard />
            <BrowseByBudgetCard />
          </div>
        </div>
        <div className="flex justify-center w-full">Advertisements</div>
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-2 bg-gray-100"></div>
      <div className="col-span-8 p-6 flex justify-center bg-gray-100 py-4">
        <div className="bg-white p-4 w-full flex justify-center">Ads Placement</div>
      </div>
      <div className="col-span-2 bg-gray-100"></div>
    </div>
  );
}

export default Home;
