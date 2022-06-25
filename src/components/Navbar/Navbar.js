import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { TextField, InputAdornment } from "@mui/material";


function Navbar() {
  return (
    <nav className="w-full p-4 bg-blue-600 text-white">
      <div className="grid grid-cols-12 text-sm">
        <div className="col-span-2"></div>
        <div className="col-span-8 flex justify-between items-center">
          <div>Logo</div>
          <div className="flex gap-5 items-center">
            <div>Tech News</div>
            <div>New Mobiles</div>
            <div>Privacy Policy</div>
            <div>Contact Us</div>
            <div>About Us</div>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <div className="bg-white text-gray-500 p-1">
                <SearchOutlined />
                <input type="text" className="focus:outline-0" />
            </div>
            <div>
              <NotificationsNoneIcon />
            </div>
            <div>
              <PersonOutlineIcon />
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </nav>
  );
}

export default Navbar;
