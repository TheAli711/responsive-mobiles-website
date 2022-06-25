import { Card } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function PopularComparisonCard() {
  return (
    <>
      <Card className="hidden md:flex flex-col items-center border p-4">
        <div className="flex">
          <div className="flex flex-col border-r-2 border-dashed border-black">
            <img src="assets/images/under15phone.png" alt="" />
            <div className="text-black">Infinix Note 12 G96</div>
          </div>
          <div className="flex flex-col ml-2">
            <img src="assets/images/under15phone.png" alt="" />
            <div className="text-black">Infinix Note 12 G96</div>
          </div>
        </div>
        <div className="w-full bg-gray-700 text-white p-2 flex justify-center mt-2">
          Compare
        </div>
      </Card>
      <Card
        sx={{ borderRadius: "1rem" }}
        className="flex justify-between md:hidden items-center"
      >
        <img src="assets/images/under15phone.png" alt="" />
        <div className="text-black">Infinix Note 12 G96</div>
        <img src="assets/images/under15phone.png" alt="" />
        <div className="text-black">Infinix Note 12 G96</div>
        <div className="h-full flex items-center bg-blue-600">
          <ArrowForwardIosIcon sx={{ color: 'white' }} fontSize="large" />
        </div>
      </Card>
    </>
  );
}

export default PopularComparisonCard;
