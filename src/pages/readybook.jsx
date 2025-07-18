import React from "react";
import Image from "next/image";
import cricketIcon from "./components/icons/ballicon.png";
import footballIcon from "./components/icons/football.png";
import tennisIcon from "./components/icons/tenisicon.png";
import politicsIcon from "./components/icons/politicsicon.png";
import casinoIcon from "./components/icons/casino.png";
import sportsbookIcon from "./components/icons/sportbookicon.png";
import horseracingIcon from "./components/icons/houseraseicon.png";
import greyhoundIcon from "./components/icons/grayhoudicon.png";
import binaryIcon from "./components/icons/binnarryicon.png";
import kabaddiIcon from "./components/icons/kabaddiicon.png";
import basketballIcon from "./components/icons/basketballicon.png";
import baseballIcon from "./components/icons/baseball.png";
import BettingTableUI from "./components/BettingTable";

const matches = [
  {
    title: "ENGLAND U19 V INDIA U19",
    subtitle: "(OTHERS)",
    status: "LIVE",
    date: "12 JUL",
    time: "03:30 PM",
    hasChat: true,
    hasVideo: true,
    hasAudio: true,
    odds: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "BARBADOS U19 V USA",
    subtitle: "(INTERNATIONAL YOUTH / U19 WEST INDIES RISING STARS)",
    status: "LIVE",
    date: "15 JUL",
    time: "07:30 PM",
    hasChat: false,
    hasVideo: false,
    hasAudio: false,
    hasSpecial: true,
    odds: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "VFB GELSENKIRCHEN V GREY CAPS AACHEN",
    subtitle: "(OTHERS)",
    status: "LIVE",
    date: "15 JUL",
    time: "08:45 PM",
    hasChat: false,
    hasVideo: true,
    hasAudio: false,
    odds: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "QUETTA GLADIATORS SRL V MULTAN SULTANS SRL",
    subtitle: "(SIMULATED REALITY LEAGUE / PAKISTAN SUPER LEAGUE SRL)",
    status: "LIVE",
    date: "15 JUL",
    time: "09:30 PM",
    hasChat: false,
    hasVideo: false,
    hasAudio: false,
    odds: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "AFGHANISTAN T10 VS BANGLADESH T10",
    subtitle: "(OTHERS)",
    status: "LIVE",
    date: "15 JUL",
    time: "09:35 PM",
    hasChat: false,
    hasVideo: true,
    hasAudio: true,
    odds: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "BARBADOS ROYALS SUPER OVER VS JAMAICA TAL...",
    subtitle: "(OTHERS)",
    status: "LIVE",
    date: "15 JUL",
    time: "09:40 PM",
    hasChat: false,
    hasVideo: true,
    hasAudio: true,
    odds: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "DURHAM V LEICESTERSHIRE",
    subtitle: "(T20 BLAST)",
    status: "LIVE",
    date: "15 JUL",
    time: "11:00 PM",
    hasChat: true,
    hasVideo: true,
    hasAudio: true,
    hasSpecial: true,
    odds: ["1.83", "1.85", "-", "-", "2.18", "2.22"],
    amounts: ["56.57", "77.11", "", "", "11.5", "152.68"],
  },
  {
    title: "WEST INDIES SRL V SOUTH AFRICA SRL",
    subtitle: "(SIMULATED REALITY LEAGUE / T20 INTERNATIONAL SRL)",
    status: "LIVE",
    date: "15 JUL",
    time: "11:30 PM",
    hasChat: false,
    hasVideo: false,
    hasAudio: false,
    odds: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "SUNRISERS EASTERN CAPE SRL V PAARL ROYALS SRL",
    subtitle: "(SIMULATED REALITY LEAGUE / SA T20 LEAGUE SRL)",
    status: "LIVE",
    date: "16 JUL",
    time: "01:30 AM",
    hasChat: false,
    hasVideo: false,
    hasAudio: false,
    odds: ["-", "-", "-", "-", "-", "-"],
  },
];

const sidebarItems = [
  { name: "Cricket", icon: cricketIcon },
  { name: "Football", icon: footballIcon },
  { name: "Tennis", icon: tennisIcon },
  { name: "Politics", icon: politicsIcon },
  { name: "Casino", icon: casinoIcon },
  { name: "Sports Book", icon: sportsbookIcon },
  { name: "Horse Racing", icon: horseracingIcon },
  { name: "Greyhound Racing", icon: greyhoundIcon },
  { name: "Binary", icon: binaryIcon },
  { name: "Kabaddi", icon: kabaddiIcon },
  { name: "Basketball", icon: basketballIcon },
  { name: "Baseball", icon: baseballIcon },
  { name: "Table Tennis", icon: tennisIcon },
  { name: "Volleyball", icon: tennisIcon },
];

const filters = [
  { label: "+ LIVE", active: true },
  { label: "+ VIRTUAL", active: false },
  { label: "+ PREMIUM", active: false },
];

export default function CricketBettingUI() {
  return (
    <div className="min-h-screen bg-[#f5f7fc] font-sans flex">
      <div className="flex w-full">
        <aside className="hidden lg:flex px-3 flex-col w-[260px] min-h-screen bg-white">
          <nav className="flex-1 py-2">
            {sidebarItems.map((item, idx) => (
              <div
                key={item.name}
                className={`w-full flex items-center gap-3 py-2.5 px-4 text-left text-[12px] cursor-pointer ${
                  idx === 0
                    ? " text-[#751929]  font-bold"
                    : "text-[#751929] font-bold hover:bg-[#f7f8fa]"
                }`}
              >
                <Image src={item.icon} alt={item.name} width={18} height={18} />
                <span className="flex-1">{item.name}</span>
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                  className="text-gray-400"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          <div className="bg-[#6B091F] px-1 py-[3px] h-4 w-full flex items-center md:ml-4">
            <svg width="16" height="16" fill="#4285f4" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          </div>

          <div className="bg-[#e9f0fa] hidden md:block mt-2 md:mt-0">
            <div className=" w-fit ml-4 h-9">
              <div className="relative h-full">
                <div
                  className="bg-[#c2002f] h-full px-2 px-r-8 flex items-center gap-2 text-white font-bold uppercase text-[13px]"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0% 100%)",
                    minWidth: "210px",
                  }}
                >
                  <Image
                    src={cricketIcon}
                    alt="Cricket"
                    width={16}
                    height={16}
                  />
                  <span className="mr-5">CRICKET</span>
                </div>
              </div>
            </div>

            <div className="  px-8 ml-42 mt-[3px]">
              {filters.map((filter) => (
                <button
                  key={filter.label}
                  className="px-4 py-1 rounded-full border border-[#c2002f] text-[#c2002f] bg-[#E9EFF8] text-[12px] font-semibold"
                >
                  {filter.label}
                </button>
              ))}

              <div className="flex items-center justify-end md:gap-32 md:ml-60 px-8 py-2 bg-[#e9f0fa]">
                <span className="text-[13px]  text-[#232326] w-16 text-center">
                  1
                </span>
                <span className="text-[13px]  text-[#232326] w-16 text-center">
                  X
                </span>
                <span className="text-[13px]  text-[#232326] w-16 text-center">
                  2
                </span>
              </div>
            </div>
          </div>

          <BettingTableUI />
        </main>
      </div>
    </div>
  );
}
