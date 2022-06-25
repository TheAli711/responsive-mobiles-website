import { Card } from "@mui/material";
import React from "react";

function PopularComparisonCard() {
  return (
    <Card className="flex flex-col items-center border p-4">
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
      <div className="w-full bg-gray-700 text-white p-2 flex justify-center mt-2">Compare</div>
    </Card>
  );
}

export default PopularComparisonCard;
