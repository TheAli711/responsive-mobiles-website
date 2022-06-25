import React from "react";
import BrowseByBudgetCard from "../components/BrowseByBudgetCard/BrowseByBudgetCard";
import CustomCarousel from "../components/Carousel/Carousel";
import DesktopMultiCarousel from "../components/Carousel/DesktopMultiCarousel";
import ComingSoonCard from "../components/MobileInfoCard/ComingSoonCard";
import MobileInfoCard from "../components/MobileInfoCard/MobileInfoCard";
import PopularMobileCard from "../components/MobileInfoCard/PopularMobileCard";

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
        <div className="flex flex-col gap-4">
          <div className="border-l-4 border-pink-600 pl-2">
            Browse By Budget
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
        <div className="bg-white p-4 w-full flex justify-center">
          Ads Placement
        </div>
      </div>
      <div className="col-span-2 bg-gray-100"></div>

      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10 my-12">
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex justify-between border-l-4 border-pink-600 pl-2">
            <div>Latest Mobiles</div>
            <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
              See More {">"}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            <MobileInfoCard />
            <MobileInfoCard />
            <MobileInfoCard />
            <MobileInfoCard />
            <MobileInfoCard />
            <MobileInfoCard />
            <MobileInfoCard />
            <MobileInfoCard />
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10 my-12">
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex justify-between border-l-4 border-pink-600 pl-2">
            <div>Upcoming Mobiles</div>
            <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
              See More {">"}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            <ComingSoonCard />
            <ComingSoonCard />
            <ComingSoonCard />
            <ComingSoonCard />
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2"></div>
      <div className="col-span-8 flex flex-col gap-10 my-12">
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex justify-between border-l-4 border-pink-600 pl-2">
            <div>Popular Mobiles</div>
            <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
              See More {">"}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            <PopularMobileCard />
            <PopularMobileCard />
            <PopularMobileCard />
            <PopularMobileCard />
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>

      <div className="col-span-2 bg-gray-100"></div>
      <div className="col-span-8 p-6 flex justify-center bg-gray-100 py-4">
        <div className="bg-white p-4 w-full flex justify-center">
          Ads Placement
        </div>
      </div>
      <div className="col-span-2 bg-gray-100"></div>
    </div>
  );
}

export default Home;
