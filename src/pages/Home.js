import React from "react";
import BrowseByBudgetCard from "../components/BrowseByBudgetCard/BrowseByBudgetCard";
import CustomCarousel from "../components/Carousel/Carousel";
import DesktopMultiCarousel from "../components/Carousel/DesktopMultiCarousel";
import PopularComparisonCard from "../components/ComparisonCard/PopularComparisonCard";
import ComingSoonCard from "../components/MobileInfoCard/ComingSoonCard";
import MobileInfoCard from "../components/MobileInfoCard/MobileInfoCard";
import PopularMobileCard from "../components/MobileInfoCard/PopularMobileCard";
import TechNewCard from "../components/TechNewCard/TechNewCard";
import TopWatches from "../components/WatchCard/TopWathes";

function Home() {
  return (
    <>
      <div className="w-full px-4 md:px-0 md:grid grid-cols-12 mt-10">
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

        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-10 my-12">
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex justify-between border-l-4 border-pink-600 pl-2">
              <div>Top Watches</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              <TopWatches />
              <TopWatches />
              <TopWatches />
              <TopWatches />
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>

        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-10 my-12">
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex justify-between border-l-4 border-pink-600 pl-2">
              <div>Popular Comparisons</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
              <PopularComparisonCard />
              <PopularComparisonCard />
              <PopularComparisonCard />
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

        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-10 my-12">
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex justify-between border-l-4 border-pink-600 pl-2">
              <div>Tech News</div>
              <div className="p-1 px-3 text-sm text-white bg-gray-600 rounded-full">
                See More {">"}
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 gap-y-6">
              <TechNewCard />
              <TechNewCard />
              <TechNewCard />
              <TechNewCard />
              <TechNewCard />
              <TechNewCard />
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div
        className="col-span-12 py-24 flex flex-col justify-center items-center w-full"
        style={{ backgroundImage: "url(assets/images/overlay-surface.png)" }}
      >
        <div className="text-2xl font-bold mb-10">Subscribe to Newsletter</div>
        <div>
          <input type="text" className="p-3 focus:outline-none" />
          <button className="p-3 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
