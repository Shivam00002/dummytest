import Image from "next/image";
import React from "react";
import ballicon from "./icons/ballicon.png";

export default function BettingTableUI() {
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

  return (
    <div className="bg-[#D4DEE3] w-full px-1 sm:px-4 overflow-x-auto">
      <table className="w-full border-collapse hidden sm:table">
        <tbody>
          {matches.map((match, idx) => (
            <tr key={idx} className="border-b border-[#e9f0fa]">
              <td className="px-3 py-2 align-top bg-white w-[300px]">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="font-bold text-[11px] text-[#111] uppercase tracking-wide">
                          {match.title}
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-[9px] text-gray-700 uppercase pt-1">
                        {match.subtitle}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="px-3 py-2 align-middle bg-white w-[80px]">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-[#02B37F] font-bold text-[13px] border-b-2 border-[#02B37F] pb-0.5 uppercase tracking-wide">
                          LIVE
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="px-2 py-2 align-middle bg-white w-fit">
                <table className="bg-[#E9EFF8]  w-[80px] text-center px-4">
                  <tbody>
                    <tr>
                      <td>
                        <span className=" text-[#c2002f] font-semibold text-[8px] px-1.5 py-0.5 rounded-sm block ">
                          {match.date}
                        </span>
                        <span className=" text-[#c2002f] font-semibold text-[8px] px-1.5 py-0.5 rounded-sm block">
                          {match.time}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="px-2 py-2 align-middle bg-white w-[80px]">
                <table>
                  <tbody>
                    <tr>
                      <td className="flex items-center gap-1">
                        {match.hasChat && (
                          <span className="w-3.5 h-3.5 text-black text-[13px] font-bold text-center leading-3 mr-1">
                            F
                          </span>
                        )}
                        {match.hasVideo && (
                          <Image
                            width="12"
                            height="12"
                            alt="tv"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlW-Afs3dhXBt3YiVzy-qAjWRROiJjB-g3FQ&s"
                          />
                        )}
                        {match.hasAudio && (
                          <span className="w-5 h-5 bg-[#c2002f] pt-1 text-white text-[8px] font-bold rounded-full inline-block text-center leading-3 mr-1">
                            BM
                          </span>
                        )}
                        {match.hasSpecial && (
                          <span className="w-5 h-5 pt-1 bg-[#1A8754] text-white text-[10px] font-bold rounded-full inline-block text-center leading-3 mr-1">
                            P
                          </span>
                        )}
                        {match.title.includes("DURHAM") && (
                          <span className="w-3.5 h-3.5 bg-[#c2002f] text-white text-[7px] font-bold rounded-full inline-block text-center leading-3">
                            T
                          </span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              {match.odds.map((odd, colIdx) => {
                const isBlue = colIdx % 2 === 0;
                const isDisabled = odd === "-";
                const amount = match.amounts ? match.amounts[colIdx] : "";

                return (
                  <td
                    key={colIdx}
                    className={`w-[85px] h-[60px] text-center cursor-pointer align-middle ${
                      isDisabled
                        ? isBlue
                          ? "bg-[#66D1FF] text-[#9ca3af]"
                          : "bg-[#FFB4C5] text-[#9ca3af]"
                        : isBlue
                        ? "bg-[#66D1FF] text-[#222] font-bold"
                        : "bg-[#FFB4C5] text-[#c2002f] font-bold"
                    }`}
                  >
                    {!isDisabled ? (
                      <table className="w-full h-full">
                        <tbody>
                          <tr>
                            <td className="text-center align-middle">
                              <div className="text-[12px] text-black font-bold leading-tight">
                                {odd}
                              </div>
                              {amount && (
                                <div className="text-[9px] text-black leading-tight">
                                  {amount}
                                </div>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full h-full">
                        <tbody>
                          <tr>
                            <td className="text-center align-middle">
                              <div className="text-[12px] font-bold text-black">
                                -
                              </div>
                              <div className="text-[12px] font-semibold text-black">
                                -
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sm:hidden w-full overflow-x-hidden">
        <div className="bg-[#e9f0fa] w-full">
          <div className="flex items-center h-8 w-full">
            <div
              className="bg-[#c2002f] h-full w-[150px] px-2 flex items-center text-white font-bold text-[11px]"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0% 100%)",
                minWidth: "100px",
              }}
            >
              <Image src={ballicon} alt="Cricket" width={12} height={12} />
              <span className="ml-1">CRICKET</span>
            </div>
          </div>
          <div className="flex justify-end items-center ml-2 gap-1 px-3 pb-2 w-full">
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

        <div className="bg-white w-full">
          {matches.map((match, idx) => (
            <div key={idx} className="border-b border-gray-100 w-full">
              <div className="px-3 w-full">
                <div className="flex items-center gap-2 mb-1 w-full">
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
              <div className="flex gap-[2px] mt-2 w-full">
                {match.odds.map((odd, colIdx) => {
                  const isBlue = colIdx % 2 === 0;
                  const isDisabled = odd === "-";
                  return (
                    <div
                      key={colIdx}
                      className={`flex-1 flex flex-col items-center justify-center h-[30px] text-center rounded-none p-0 m-0 select-none w-full
                        ${
                          isDisabled
                            ? isBlue
                              ? "bg-[#66D1FF] text-[#9ca3af]"
                              : "bg-[#FFB4C5] text-[#9ca3af]"
                            : isBlue
                            ? "bg-[#66D1FF] text-black"
                            : "bg-[#FFB4C5] text-[#c2002f]"
                        }`}
                    >
                      <span
                        className={`${
                          isDisabled ? "font-normal" : "font-bold"
                        } text-[13px] leading-[13px] mb-[1px]`}
                      >
                        {odd}
                      </span>
                      <span className="text-[11px] font-semibold leading-[11px] text-black mt-0">
                        -
                      </span>
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
