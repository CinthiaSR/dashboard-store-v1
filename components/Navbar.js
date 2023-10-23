"use client";
import React from "react";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotificationLine,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

const Navbar = ({ showMenu }) => {
  // const { showMenu } = showMenu;
  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left0" : "-left-full "
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-lg rounded-bl-xl">
            <a
              href="#"
              className="bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-center text-white"
            >
              <RiHome6Line className="text-2xl text-center" />
            </a>
          </li>
          <li className="hover:bg-[#262837]  p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-center text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-2xl text-center" />
            </a>
          </li>
          <li className="hover:bg-[#262837]  p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-center text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl text-center" />
            </a>
          </li>
          <li className="hover:bg-[#262837]  p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-center text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl text-center" />
            </a>
          </li>
          <li className="hover:bg-[#262837]  p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-center text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiNotificationLine className="text-2xl text-center" />
            </a>
          </li>
          <li className="hover:bg-[#262837]  p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-center text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-2xl text-center" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837]  p-4 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-center text-[#EC7C6A] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl text-center" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
