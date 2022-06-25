import { Card } from "@mui/material";
import React from "react";

function BrowseByBudgetCard() {
  return (
    <Card className="flex flex-col items-center border p-4">
      <img src="assets/images/under15phone.png" alt="" />
      <div>Under 15,000</div>
    </Card>
  );
}

export default BrowseByBudgetCard;
