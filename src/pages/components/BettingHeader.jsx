import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

import homeIcon from "./icons/homeicon.png";
import inplayIcon from "./icons/videoicon.png";
import cricketIcon from "./icons/ballicon.png";
import footballIcon from "./icons/football.png";
import tennisIcon from "./icons/tenisicon.png";
import politicsIcon from "./icons/politicsicon.png";
import casinoIcon from "./icons/casino.png";
import sportsbookIcon from "./icons/sportbookicon.png";
import horseracingIcon from "./icons/houseraseicon.png";
import greyhoundIcon from "./icons/grayhoudicon.png";
import binaryIcon from "./icons/binnarryicon.png";
import kabaddiIcon from "./icons/kabaddiicon.png";
import basketballIcon from "./icons/basketballicon.png";
import baseballIcon from "./icons/baseball.png";
import redLogo from "./icons/redlogo.png";
import logogold from "./icons/logogold.png";

const navItems = [
  { name: "HOME", icon: homeIcon, active: true },
  { name: "IN-PLAY", icon: inplayIcon },
  { name: "CRICKET", icon: cricketIcon },
  { name: "FOOTBALL", icon: footballIcon },
  { name: "TENNIS", icon: tennisIcon },
  { name: "POLITICS", icon: politicsIcon },
  { name: "CASINO", icon: casinoIcon },
  { name: "SPORTS BOOK", icon: sportsbookIcon },
  { name: "HORSE RACING", icon: horseracingIcon },
  { name: "GREYHOUND RACING", icon: greyhoundIcon },
  { name: "BINARY", icon: binaryIcon },
  { name: "KABADDI", icon: kabaddiIcon },
  { name: "BASKETBALL", icon: basketballIcon },
  { name: "BASEBALL", icon: baseballIcon },
];

export default function BettingHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full">
      <div className="hidden lg:block w-full">
        <div className="flex items-center justify-between md:px-14 px-8 py-2 bg-white border-b border-[#e5e5e5] w-full">
          <div className="flex items-center min-w-[160px]">
            <Image
              src={redLogo}
              alt="Logo"
              width={110}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="flex items-center flex-1  min-w-0 gap-3">
            <div className="relative w-[350px] max-w-[350px] min-w-[180px]">
              <input
                type="text"
                placeholder="Search Events"
                className="w-full h-[30px] pl-2 pr-12 text-[14px] rounded-[8px] border border-[#e5e5e5] focus:outline-none focus:border-[#a8002f] bg-white placeholder-[#6b6a6a] shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]"
                style={{ fontWeight: 500 }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1a3353]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </div>
            <button className="bg-[#C2002F] text-white text-[11px] border-b-3 border-gray-700 rounded-[5px] px-2 h-[30px] flex items-center justify-center hover:bg-[#a8002f] transition whitespace-nowrap ml-2">
              RULES
            </button>
          </div>

          <div className="flex items-center gap-0 ml-4">
            <button className="border-1 border-[#C2002F] text-white  text-[13px] font-bold rounded-[8px] px-3 h-[30px]   bg-[#343435] ">
              SIGNUP
            </button>
            <button className="border-1 border-[#C2002F] text-white text-[13px] font-bold rounded-[8px] px-3 h-[30px]   bg-[#343435] ">
              LOGIN
            </button>
          </div>
        </div>

        <nav className="flex items-center w-full justify-center bg-[#333437] px-4 h-[50px] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex items-center justify-start gap-8 w-full min-w-0">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`flex flex-col items-center justify-center gap-1 px-4 rounded-t-md h-[50px] cursor-pointer ${
                  item.active ? "bg-[#a8002f]" : "bg-transparent"
                } transition`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="w-4 h-4"
                  width={28}
                  height={28}
                />
                <span
                  className={`text-[11px] font-semibold tracking-tight ${
                    item.active ? "text-white" : "text-white/90"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="lg:hidden w-full">
        <div className="flex items-center justify-between px-3 py-2 bg-black">
          <div className="flex items-center">
            <Image
              src={logogold}
              alt="Logo"
              width={80}
              height={24}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="border border-gray-500 text-white text-[11px] font-bold rounded px-3 py-1 bg-[#343435]">
              SIGNUP
            </button>
            <button className="border border-gray-500 text-white text-[11px] font-bold rounded px-3 py-1 bg-[#343435]">
              LOGIN
            </button>
          </div>
        </div>

        <div className="bg-black px-1 pb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Events"
              className="w-full h-8 pl-3 pr-8 text-sm rounded border border-gray-600 focus:outline-none focus:border-[#a8002f] bg-[#232326] text-white placeholder-gray-400"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>
        </div>

        <nav className="relative bg-white text-gray-700 h-12 w-full flex items-center">
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <ul className="flex items-center gap-1 h-12 w-max">
              {navItems.slice(0, 15).map((item) => (
                <li
                  key={item.name}
                  className={`flex flex-col items-center justify-center gap-0.5 px-2 py-1 h-12 cursor-pointer min-w-[60px] ${
                    item.active ? "bg-black" : "bg-transparent"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    className="w-5 h-5"
                    width={20}
                    height={20}
                  />
                  <span
                    className={`text-[9px] font-bold tracking-tight ${
                      item.active ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-none h-12 flex items-center bg-white shadow-l">
            <div
              className="flex flex-col items-center justify-center gap-0.5 px-3 py-1 h-12 cursor-pointer min-w-[60px] text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
          </div>

          {sidebarOpen && (
            <div className="fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black bg-opacity-40"
                onClick={() => setSidebarOpen(false)}
              />

              <div className="relative bg-white w-[85vw] max-w-[250px] h-full">
                <div className="flex items-center justify-between px-6 pt-2 pb-2">
                  <Image
                    src={logogold}
                    alt="Logo"
                    width={80}
                    height={40}
                    className="mx-auto"
                  />
                  <button
                    className=" text-[20px]  ml-4 "
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close sidebar"
                  >
                    X
                  </button>
                </div>
                <nav className="mt-2 flex flex-col gap-1 px-2">
                  {navItems.map((item, idx) => (
                    <div
                      key={item.name}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
                        item.active
                          ? "bg-[#fff7f2] text-[#c2002f]"
                          : "text-[#222]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={18}
                          height={18}
                        />
                        <span className="text-[10px] font-semibold ">
                          {item.name}
                        </span>
                      </div>
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke={item.active ? "#c2002f" : "#b0b0b0"}
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </nav>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.25s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </header>
  );
}
