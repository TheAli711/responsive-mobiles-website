import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function Footer() {
  return (
    <div className="w-full bg-black text-white text-sm p-4">
      <div className="hidden xl:grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-8 flex flex-col gap-8">
          <div className="grid grid-cols-5 pt-8 gap-8 mb-12">
            <div className="flex flex-col">
              <div className="text-2xl">Logo</div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis nesciunt molestias, nisi consequu et voluptate
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Softliee</div>
              <div>
                <ArrowRightIcon /> Our Blog
              </div>
              <div>
                <ArrowRightIcon /> Contact Us
              </div>
              <div>
                <ArrowRightIcon /> Advertise with us
              </div>
              <div>
                <ArrowRightIcon /> Privacy Policy
              </div>
              <div>
                <ArrowRightIcon /> Terms & Conditions
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Top Brands</div>
              <div>
                <ArrowRightIcon /> Apple
              </div>
              <div>
                <ArrowRightIcon /> Samsung
              </div>
              <div>
                <ArrowRightIcon /> Huawei
              </div>
              <div>
                <ArrowRightIcon /> Oppo
              </div>
              <div>
                <ArrowRightIcon /> Realme
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Sections</div>
              <div>
                <ArrowRightIcon /> Top Mobiles
              </div>
              <div>
                <ArrowRightIcon /> Top Watches
              </div>
              <div>
                <ArrowRightIcon /> Top Tablets
              </div>
              <div>
                <ArrowRightIcon /> Tech News
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                Download US
              </div>
              <img className="border border-white rounded-lg" src="assets/images/getitongoogleplay.png" alt="" />
            </div>
          </div>
          <hr />
          <div className="flex justify-between">
            <div>
              Softliee Pakistan &copy; 2020 All Rights Reserved{" "}
              <span className="text-red-500">Softliee.com</span>
            </div>
            <div className="flex gap-4">
              <FacebookSharpIcon />
              <YouTubeIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}

export default Footer;
