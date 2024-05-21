import React from "react";
import logo from "./logo.png"
// import { footerLinks1, footerLinks2, footerLinks3 } from "../utils/Constants";
// import apple from "../assets/homepageImages/appStorebtn.svg";
// import android from "../assets/homepageImages/playStoreBtn.svg";
// import logo from "../assets/adminDashboardImages/logo.svg";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import linkedIn from "../assets/homepageImages/linkedin.svg";
// import facebook from "../assets/homepageImages/facebook.svg";
// import instagram from "../assets/homepageImages/instagram.svg";
// import x from "../assets/homepageImages/x.svg";

const Footer = () => {
  return (
    <div className="bg-lightGreen text-white py-[100px]">
      <div className="flex mx-auto flex-col gap-16 max-w-[1280px] w-[90%]">
        {/* <div className="dash-grid font-light">
          <div className="flex flex-col gap-2">
            {footerLinks1.map((item, i) => (
              <a key={i} href={item.link}>
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col  gap-2">
            {footerLinks2.map((item, i) => (
              <a key={i} href={item.link}>
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col  gap-2">
            {footerLinks3.map((item, i) => (
              <a key={i} href={item.link}>
                {item.title}
              </a>
            ))}
          </div>
          <div className="hidden xl:flex flex-col justify-between">
            <p>English</p>
            <p>© 2024 Decode Academy</p>
          </div>
        </div> */}
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex  flex-col">
            <div className="flex  gap-4 items-center mb-12">
              <div className="bg-white rounded">
                <img className="bg-white1" src={logo} alt="logo" />
              </div>
              <div>
                <span className="flex gap-2 items-center">
                  {/* <FaRegQuestionCircle /> */}
                  <p>Financial Data</p>
                </span>
                <span className="flex gap-2 items-center">
                  {/* <FaRegQuestionCircle /> */}
                  {/* <p>FAQs</p> */}
                </span>
              </div>
            </div>
            <div className="w-full flex">
              <div className="hidden md:flex gap-4">
                <img src={"linkedin.svg"} alt="linkedIn" />
                <img src={"facebook.svg"} alt="facebook" />
                <img src={"instagram.svg"} alt="instagram" />
                {/* <img src={x} alt="x" /> */}
              </div>
            </div>
          </div>
          <div className="mb-12 flex flex-col justify-center items-center">
            <div className="flex gap-7 items-center">
              {/* <img src={apple} alt="app store" />
              <img src={android} alt="play store" /> */}
            </div>
            <div className="flex gap-3 text-sm py-4 text-gray4">
              <p>© Finshark 2024</p>
              <a href="">Privacy</a>
              <a href="">Policy</a>
              <a href="">Terms</a>
            </div>
          </div>
          <div className="flex md:hidden items-center md:items-start">
            <div className="flex  mx-auto md:mx-0 gap-4 ">
              {/* <img src={linkedIn} alt="linkedIn" />
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={x} alt="x" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
