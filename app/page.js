"use client";
import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
} from "react-icons/ri";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main/Main";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Navbar showMenu={showMenu} />
      <nav
        className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl 
      text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl"
      >
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toogleMenu} className="text-white p-2">
          {/* <RiMenu3Fill onClick={toogleMenu} /> */}
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <Main />
    </div>
  );
};

export default HomePage;
