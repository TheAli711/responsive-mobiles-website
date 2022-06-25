import { Card } from "@mui/material";
import React from "react";

function ComingSoonCard() {
  return (
    <Card className="flex flex-col items-center border p-4">
      <img src="assets/images/under15phone.png" alt="" />
      <div className="text-black">Infinix Note 12 G96</div>
      <div className="text-gray-500">6.7"/8/128GB/5000 MAh</div>
      <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Coming Soon
      </div>
    </Card>
  );
}

export default ComingSoonCard;
