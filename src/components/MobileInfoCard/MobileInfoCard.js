import { Card } from "@mui/material";
import React from "react";
import CompareButton from "../CompareButton/CompareButton";

function MobileInfoCard() {
  return (
    <Card className="flex flex-col items-center border p-4">
      <img src="assets/images/under15phone.png" alt="" />
      <div className="text-black">Infinix Note 12 G96</div>
      <CompareButton />
      <div className="text-gray-500">6.7"/8/128GB/5000 MAh</div>
      <div className="text-black font-bold">RS. 36, 999</div>
    </Card>
  );
}

export default MobileInfoCard;
