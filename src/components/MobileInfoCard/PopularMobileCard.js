import { Card } from "@mui/material";
import React from "react";
import CompareButton from "../CompareButton/CompareButton";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

function PopularMobileCard() {
  return (
    <Card className="flex flex-col items-center border p-4">
      <img src="assets/images/under15phone.png" alt="" />
      <div className="text-black">Infinix Note 12 G96</div>
      <CompareButton></CompareButton>
      <div className="flex items-end gap-2">
        <div> 36,2664 </div>
        <div>
          <SignalCellularAltIcon sx={{ color: 'blue'}} />
        </div>
      </div>
    </Card>
  );
}

export default PopularMobileCard;
