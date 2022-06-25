import { Card } from "@mui/material";
import React from "react";

function BrowseByBudgetCard() {
  return (
    <Card
      sx={{ borderRadius: "1rem" }}
      className="flex md:flex-col items-center border p-4 drop-shadow-lg rounded-2xl"
    >
      <img src="assets/images/under15phone.png" alt="" />
      <div>Under 15,000</div>
    </Card>
  );
}

export default BrowseByBudgetCard;
