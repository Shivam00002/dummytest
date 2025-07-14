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

const matches = [
  {
    title: "ENGLAND V INDIA",
    subtitle: "(TEST MATCHES)",
    date: "10 JUL",
    time: "03:30 PM",
    status: "LIVE",
    hasVideo: true,
    hasAudio: true,
    hasChat: true,
    odds: ["1.36", "1.37", "300", "310", "3.8", "3.85"],
    amounts: ["440612.2", "32672.44", "818.26", "0", "12490.95", "524.02"],
  },
  {
    title: "ENGLAND U19 V INDIA U19",
    subtitle: "(OTHERS)",
    date: "12 JUL",
    time: "03:30 PM",
    status: "LIVE",
    hasVideo: true,
    hasAudio: true,
    hasChat: true,
    odds: ["-", "-", "-", "-", "-", "-"],
    amounts: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "WEST INDIES V AUSTRALIA",
    subtitle: "(TEST MATCHES)",
    date: "13 JUL",
    time: "12:00 AM",
    status: "LIVE",
    hasVideo: true,
    hasAudio: true,
    hasChat: true,
    odds: ["4.7", "4.9", "510", "740", "1.26", "1.27"],
    amounts: ["789.72", "5.77", "2.51", "2.27", "2477.5", "10620.85"],
  },
  {
    title: "JOBURG SUPER KINGS SRL ...",
    subtitle: "(SIMULATED REALITY LEAGUE / S...)",
    date: "14 JUL",
    time: "03:30 PM",
    status: "LIVE",
    hasVideo: false,
    hasAudio: false,
    hasChat: true,
    odds: ["-", "-", "-", "-", "-", "-"],
    amounts: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "🏏PAKISTAN T10 VS AUSTR...",
    subtitle: "(OTHERS)",
    date: "14 JUL",
    time: "06:05 PM",
    status: "LIVE",
    hasVideo: false,
    hasAudio: true,
    hasChat: true,
    odds: ["-", "-", "-", "-", "-", "-"],
    amounts: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "ZIMBABWE V SOUTH AFRICA",
    subtitle: "(INTERNATIONAL TWENTY20 MA...)",
    date: "14 JUL",
    time: "06:30 PM",
    status: "LIVE",
    hasVideo: true,
    hasAudio: true,
    hasChat: true,
    odds: ["5", "5.2", "-", "-", "1.24", "1.25"],
    amounts: ["789.72", "5.77", "-", "-", "2477.5", "10620.85"],
  },
  {
    title: "KOLN CC V LENKERBECK M...",
    subtitle: "(OTHERS)",
    date: "14 JUL",
    time: "06:45 PM",
    status: "LIVE",
    hasVideo: false,
    hasAudio: true,
    hasChat: true,
    odds: ["-", "-", "-", "-", "-", "-"],
    amounts: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "HOBART HURRICANES SRL ...",
    subtitle: "(SIMULATED REALITY LEAGUE / B...)",
    date: "14 JUL",
    time: "05:30 PM",
    status: "LIVE",
    hasVideo: false,
    hasAudio: false,
    hasChat: true,
    odds: ["-", "-", "-", "-", "-", "-"],
    amounts: ["-", "-", "-", "-", "-", "-"],
  },
  {
    title: "MUMBAI INDIANS SRL V P...",
    subtitle: "(SIMULATED REALITY LEAGUE / P...)",
    date: "14 JUL",
    time: "07:30 PM",
    status: "LIVE",
    hasVideo: false,
    hasAudio: false,
    hasChat: true,
    odds: ["-", "-", "-", "-", "-", "-"],
    amounts: ["-", "-", "-", "-", "-", "-"],
  },
];

export default function CricketBettingUI() {
  return (
    <div className="min-h-screen bg-[#f5f7fc] font-sans flex">
      <div className="hidden lg:flex w-full">
        <aside className="flex flex-col w-[260px] min-h-screen bg-white">
          <nav className="flex-1 py-2">
            {sidebarItems.map((item, idx) => (
              <div
                key={item.name}
                className={`w-full flex items-center gap-3 py-2.5 px-4 text-left text-[13px] cursor-pointer ${
                  idx === 0
                    ? "bg-[#fff2f2] text-[#dc2626] border-r-4 border-[#dc2626] font-bold"
                    : "text-[#374151] font-medium hover:bg-[#f7f8fa]"
                }`}
              >
                <Image src={item.icon} alt={item.name} width={18} height={18} />
                <span className="flex-1">{item.name}</span>
                <svg
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
          <div className="bg-[#7B1A1A] h-4 w-full flex items-center ml-4">
            <svg width="16" height="16" fill="#4285f4" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          </div>

          <div className="bg-[#e9f0fa]">
            <div className="flex items-center ml-4 h-12">
              <div className="relative h-full">
                <div
                  className="bg-[#c2002f] h-full px-8 flex items-center gap-2 text-white font-bold uppercase text-[13px]"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0% 100%)",
                    minWidth: "140px",
                  }}
                >
                  <Image
                    src={cricketIcon}
                    alt="Cricket"
                    width={16}
                    height={16}
                  />
                  <span>CRICKET</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[2px] ml-22 px-8 mt-[2px]">
              {filters.map((filter) => (
                <button
                  key={filter.label}
                  className="px-4 py-1 rounded-full border-1 border-[#c2002f] text-[#c2002f] bg-[#E9EFF8] text-[12px] font-semibold"
                >
                  {filter.label}
                </button>
              ))}

              <div className="flex items-center justify-end md:gap-32 md:ml-60 px-8 py-2 bg-[#e9f0fa]">
                <span className="text-[13px] font-bold text-[#232326] w-16 text-center">
                  1
                </span>
                <span className="text-[13px] font-bold text-[#232326] w-16 text-center">
                  X
                </span>
                <span className="text-[13px] font-bold text-[#232326] w-16 text-center">
                  2
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white mt-2 py-1">
            {matches.map((match, idx) => (
              <div
                key={idx}
                className="flex items-stretch border-b border-[#e9f0fa] hover:bg-[#f7f8fa] min-h-[60px]"
              >
                <div className="flex-1 min-w-0 px-6 py-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-bold text-[11px] text-[#111] uppercase tracking-wide">
                      {match.title.replace("🏏", "")}
                    </h3>
                    <span className="text-[#10b981] font-bold text-[10px] border-b-2 border-[#10b981] pb-0.5 uppercase tracking-wide ml-2">
                      LIVE
                    </span>
                    <span className="bg-[#e9f0fa] text-[#c2002f] font-bold text-[8px] px-2 py-1 rounded-md ml-2">
                      {match.date}
                    </span>
                    <span className="bg-[#e9f0fa] text-[#c2002f] font-bold text-[8px] px-2 py-1 rounded-md ml-2">
                      {match.time}
                    </span>
                    {match.hasChat && (
                      <span className="w-3.5 h-3.5 bg-black text-white text-[8px] font-bold flex items-center justify-center ml-2">
                        F
                      </span>
                    )}
                    {match.hasVideo && (
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="ml-2"
                      >
                        <rect x="3" y="7" width="15" height="10" rx="2" />
                        <polygon points="21 7 16 12 21 17" />
                      </svg>
                    )}
                    {match.hasAudio && (
                      <span className="w-3.5 h-3.5 bg-[#c2002f] text-white text-[7px] font-bold rounded-full flex items-center justify-center ml-2">
                        BM
                      </span>
                    )}
                  </div>
                  <div className="text-[8px] text-[#888] uppercase mt-1">
                    {match.subtitle}
                  </div>
                </div>

                <div className="flex">
                  {match.odds.map((odd, colIdx) => {
                    const amount = match.amounts[colIdx];
                    const isBack = colIdx % 2 === 0;
                    const isDisabled = odd === "-";

                    return (
                      <div
                        key={colIdx}
                        className={`w-[85px] h-[60px] flex flex-col items-center justify-center text-center cursor-pointer border-r border-white last:border-r-0 ${
                          isDisabled
                            ? "bg-[#f3f4f6] text-[#9ca3af]"
                            : isBack
                            ? "bg-[#b3e0ff] text-[#222] font-bold"
                            : "bg-[#ffd6e0] text-[#c2002f] font-bold"
                        }`}
                      >
                        {!isDisabled ? (
                          <>
                            <div className="text-[10px] font-bold leading-tight">
                              {odd}
                            </div>
                            <div className="text-[8px] opacity-90 leading-tight">
                              {amount}
                            </div>
                          </>
                        ) : (
                          <div className="text-[10px] font-bold">-</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="lg:hidden w-full">
        <div className="bg-[#e9f0fa]">
          <div className="flex items-center h-8">
            <div
              className="bg-[#c2002f] h-full m w-[150px] px-2  flex items-center  text-white font-bold text-[11px]"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0% 100%)",
                minWidth: "100px",
              }}
            >
              <Image src={cricketIcon} alt="Cricket" width={12} height={12} />
              <span>CRICKET</span>
            </div>
          </div>

          <div className="flex justify-end items-center ml-20 gap-1 px-3 pb-2">
            <button className="px-3 py-1 rounded-full border border-[#c2002f] text-[#c2002f] bg-[#E9EFF8] text-[10px] font-semibold">
              + LIVE
            </button>
            <button className="px-3 py-1 rounded-full border border-[#c2002f] text-[#c2002f] bg-[#E9EFF8] text-[10px] font-semibold">
              + VIRTUAL
            </button>
            <button className="px-3 py-1 rounded-full border border-[#c2002f] text-[#c2002f] bg-[#E9EFF8] text-[10px] font-semibold">
              + PREMIUM
            </button>
          </div>
        </div>

        <div className="bg-white">
          {matches.map((match, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <div className="px-3 py-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-[10px] text-black uppercase">
                    {match.title.replace("🏏", "")}
                  </h3>
                  <span className="text-[#10b981] font-bold text-[8px] border-b border-[#10b981]">
                    LIVE
                  </span>
                  <span className="bg-[#e9f0fa] text-[#c2002f] font-bold text-[7px] px-1.5 py-0.5 rounded">
                    {match.date}
                  </span>
                  <span className="bg-[#e9f0fa] text-[#c2002f] font-bold text-[7px] px-1.5 py-0.5 rounded">
                    {match.time}
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    {match.hasChat && (
                      <span className="w-3 h-3 bg-black text-white text-[6px] font-bold flex items-center justify-center rounded-sm">
                        F
                      </span>
                    )}
                    {match.hasVideo && (
                      <svg
                        width="10"
                        height="10"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="7" width="15" height="10" rx="2" />
                        <polygon points="21 7 16 12 21 17" />
                      </svg>
                    )}
                    {match.hasAudio && (
                      <span className="w-3 h-3 bg-[#c2002f] text-white text-[6px] font-bold rounded-full flex items-center justify-center">
                        BM
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-[7px] text-gray-500 uppercase">
                  {match.subtitle}
                </div>
              </div>

              <div className="flex">
                {match.odds.map((odd, colIdx) => {
                  const isBack = colIdx % 2 === 0;
                  const isDisabled = odd === "-";

                  return (
                    <div
                      key={colIdx}
                      className={`flex-1 h-12 flex items-center justify-center text-center cursor-pointer border-r border-white last:border-r-0 ${
                        isDisabled
                          ? "bg-gray-200 text-gray-400"
                          : isBack
                          ? "bg-[#b3e0ff] text-black font-bold"
                          : "bg-[#ffd6e0] text-[#c2002f] font-bold"
                      }`}
                    >
                      <div className="text-[9px] font-bold">{odd}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
