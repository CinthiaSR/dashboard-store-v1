"use client";
import Link from "next/link";
import { RiArrowDownSLine, RiSearch2Line } from "react-icons/ri";
import CardSingle from "../CardSingle/CardSingle";
import OrderCart from "../OrderCart/OrderCart";

const Main = ({ toogleOrder, showOrder }) => {
  return (
    <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
      <div className="lg:col-span-6 md:p-8 p-4">
        <header>
          {/* Title header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl text-gray-200">Jeager Resto</h1>
              <p className="text-gray-500">13 Octubre 2023</p>
            </div>
            <form>
              <div className="w-full relative">
                <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          {/* Tabs */}
          <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
            <Link
              href=""
              className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#EC7C6A] before:left-0 
                before:rounded-full before:-bottom-[1px] text-[#EC7C6A]"
            >
              Hot dishes
            </Link>
            <Link href="" className="py-2 pr-4">
              Cold dishes
            </Link>
            <Link href="" className="py-2 pr-4">
              Soup
            </Link>
            <Link href="" className="py-2 pr-4">
              Grill
            </Link>
          </nav>
        </header>
        {/* Title*/}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-xl text-gray-300">Choose Dishes</h2>
          <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
            <RiArrowDownSLine />
            Dine in
          </button>
        </div>
        {/* Card */}
        <CardSingle />
      </div>
      {/* Cart Order */}
      <OrderCart showOrder={showOrder} toogleOrder={toogleOrder} />
    </main>
  );
};
export default Main;
