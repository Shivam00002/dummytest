import React from "react";
import {
  HomeIcon,
  CogIcon,
  PlayIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  StarIcon,
  ChartBarIcon,
  BanknotesIcon,
  UserGroupIcon,
  KeyIcon,
  LanguageIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const sidebarItems = [
  { icon: HomeIcon, label: "Dashboard" },
  { icon: CogIcon, label: "Manage" },
  { icon: PlayIcon, label: "Live Matches" },
  { icon: CheckCircleIcon, label: "Completed Matches" },
  { icon: BuildingOfficeIcon, label: "Live Casino" },
  { icon: StarIcon, label: "Royal Casino" },
  { icon: ChartBarIcon, label: "Check Casino Result" },
  { icon: BanknotesIcon, label: "Block Market" },
  { icon: UserGroupIcon, label: "Manage Clients" },
  { icon: KeyIcon, label: "Manage Password" },
  { icon: LanguageIcon, label: "Language" },
  { icon: UsersIcon, label: "Manage Ledgers" },
];

const agentClients = [
  { name: "SA434636(A)", matchComm: 3, ssnComm: 3, currentLimit: "0.00" },
  {
    name: "SA453224(Ramesh)",
    matchComm: 3,
    ssnComm: 3,
    currentLimit: "100.00",
  },
];

const allUsers = [
  {
    name: "SP410818(Cutting)",
    matchComm: 3,
    ssnComm: 3,
    currentLimit: "1887576.87",
  },
  {
    name: "SP421495(Cutting 2)",
    matchComm: 3,
    ssnComm: 3,
    currentLimit: "0.58",
  },
  { name: "SP451246(Rana)", matchComm: 0, ssnComm: 0, currentLimit: "0.00" },
];

export default function ClientsDashboard() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <div
        className="w-full flex items-center bg-[#184899] h-[36px] px-0"
        style={{ minHeight: "36px", maxHeight: "36px" }}
      >
        <span className="flex-1 text-end mr-4 text-white font-bold text-[14px] leading-[36px] truncate ">
          MatchName Karaikal Kniiights v Genid Yanam Royals Nitesh Boundaries
          Match bet deleted, Reason:-wrong
        </span>
        <button
          className="bg-[#EE5467] h-full px-[18px] text-white text-[13px] font-medium rounded-none"
          style={{ borderRadius: 0, height: "36px" }}
        >
          All Message
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <aside className="hidden lg:flex flex-col w-[220px] min-h-screen bg-[#304050]">
          <div className="flex flex-col px-[18px] pt-[22px] pb-[10px] border-b border-[#2e3b52]">
            <span className="text-[13px] text-[#e6e6e6] font-semibold tracking-wide mb-[2px]">
              SS409532(nhjv)
            </span>
            <span className="text-[12px] text-[#bfc9db]">Stockist</span>
          </div>
          <nav className="flex-1 mt-[18px]">
            {sidebarItems.map((item, idx) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-[13px] px-[22px] py-[11px] text-left text-[#e6e6e6] text-[15px] font-normal hover:bg-[#1a2536] transition-colors`}
                style={{
                  background: idx === 0 ? "#293846" : "transparent",
                  fontWeight: idx === 0 ? 600 : 400,
                }}
              >
                <item.icon className="h-[20px] w-[20px] text-[#bfc9db]" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 it  flex flex-col">
          <div className="w-full flex items-center bg-[#f8f9fa] pt-[10px] pb-[10px] px-0">
            <button className="ml-[12px] bg-[#1EAAB8] rounded-[5px] w-[35px] h-[25px] flex items-center justify-center">
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" fill="none" />
                <rect y="6" width="24" height="3" rx="1.5" fill="#fff" />
                <rect y="11" width="24" height="3" rx="1.5" fill="#fff" />
                <rect y="16" width="24" height="3" rx="1.5" fill="#fff" />
              </svg>
            </button>

            <div className="flex-1" />

            <div className="flex items-center gap-[7px] mr-[18px]">
              <span className="text-[#bfc9db] md:flex hidden text-[15px] font-semibold tracking-wide">
                NEW247
              </span>
              <svg
                className="h-[18px] w-[18px] text-[#bfc9db]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
              <span className="text-[#bfc9db] text-[15px] font-semibold">
                Sign out
              </span>
            </div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-[0px] pt-[10px]">
            <div className="text-gray-700 text-[22px] font-light leading-[1.1] mb-[5px] px-[12px]">
              CLIENTS
            </div>
            <div className="flex items-center gap-[5px] text-gray-600 text-[13px] mb-[10px] px-[12px]">
              <span>Dashboard</span>
              <span>/</span>
              <span className="text-gray-600 font-semibold">
                Commission & Limits
              </span>
            </div>

            <div className="bg-white rounded-[3px] border border-[#e5e7eb] mb-[13px] mx-[6px]">
              <div className="px-[12px] pt-[13px] pb-[5px] text-gray-700 text-[16px] font-semibold">
                Agent
              </div>
              <div className="px-[12px] pb-[8px]">
                <input
                  type="text"
                  placeholder="Search SAId"
                  className="w-full h-[32px] border border-[#e5e7eb] rounded-[2px] px-[9px] text-[14px] text-gray-700 bg-[#fafbfc] focus:outline-none mb-[8px]"
                />
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                      <tr className="bg-[#f5f6fa]">
                        <th className="text-left text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Client Name
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Match Comm.
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Ssn Comm.
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Current Limit
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Down Balance
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {agentClients.map((client, idx) => (
                        <tr
                          key={client.name}
                          className="border-b border-[#e5e7eb]"
                        >
                          <td className="py-[6px] px-[6px] text-[13px] text-gray-700">
                            {client.name}
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <input
                              type="text"
                              value={client.matchComm}
                              className="w-[32px] h-[24px] border border-[#e5e7eb] rounded-[2px] text-center text-[13px] text-gray-700 bg-[#fafbfc]"
                              readOnly
                            />
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <input
                              type="text"
                              value={client.ssnComm}
                              className="w-[32px] h-[24px] border border-[#e5e7eb] rounded-[2px] text-center text-[13px] text-gray-700 bg-[#fafbfc]"
                              readOnly
                            />
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <input
                              type="text"
                              value={client.currentLimit}
                              className="w-[60px] h-[24px] border border-[#e5e7eb] rounded-[2px] text-center text-[13px] text-gray-700 bg-[#fafbfc]"
                              readOnly
                            />
                          </td>
                          <td className="py-[6px] px-[6px] text-center text-[13px] text-gray-700">
                            <button className="bg-[#1886CC] text-white text-[13px] font-semibold px-[10px] py-[2px] rounded-[2px]">
                              Balance
                            </button>
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <button className="bg-[#1886CC] text-white text-[13px] font-semibold px-[7px] py-[2px] rounded-[2px] mr-[2px]">
                              D
                            </button>
                            <button className="bg-[#EE5467] text-white text-[13px] font-semibold px-[7px] py-[2px] rounded-[2px] mr-[2px]">
                              W
                            </button>
                            <button className="bg-[#1CACB4] text-white text-[13px] font-semibold px-[7px] py-[2px] rounded-[2px]">
                              ⚙
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[3px] border border-[#e5e7eb] mb-[13px] mx-[6px]">
              <div className="px-[12px] pt-[13px] pb-[5px] text-gray-700 text-[16px] font-semibold">
                All Users
              </div>
              <div className="px-[12px] pb-[8px]">
                <input
                  type="text"
                  placeholder="Search UserId"
                  className="w-full h-[32px] border border-[#e5e7eb] rounded-[2px] px-[9px] text-[14px] text-gray-700 bg-[#fafbfc] focus:outline-none mb-[8px]"
                />
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                      <tr className="bg-[#f5f6fa]">
                        <th className="text-left text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Client Name
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Match Comm.
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Ssn Comm.
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Current Limit
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Show Expo
                        </th>
                        <th className="text-center text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUsers.map((user, idx) => (
                        <tr
                          key={user.name}
                          className="border-b border-[#e5e7eb]"
                        >
                          <td className="py-[6px] px-[6px] text-[13px] text-gray-700">
                            {user.name}
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <input
                              type="text"
                              value={user.matchComm}
                              className="w-[32px] h-[24px] border border-[#e5e7eb] rounded-[2px] text-center text-[13px] text-gray-700 bg-[#fafbfc]"
                              readOnly
                            />
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <input
                              type="text"
                              value={user.ssnComm}
                              className="w-[32px] h-[24px] border border-[#e5e7eb] rounded-[2px] text-center text-[13px] text-gray-700 bg-[#fafbfc]"
                              readOnly
                            />
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <input
                              type="text"
                              value={user.currentLimit}
                              className="w-[60px] h-[24px] border border-[#e5e7eb] rounded-[2px] text-center text-[13px] text-gray-700 bg-[#fafbfc]"
                              readOnly
                            />
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <button className="bg-[#EE5467] text-white text-[13px] font-semibold px-[10px] py-[2px] rounded-[2px]">
                              Expo
                            </button>
                          </td>
                          <td className="py-[6px] px-[6px] text-center">
                            <button className="bg-[#1886CC] text-white text-[13px] font-semibold px-[7px] py-[2px] rounded-[2px] mr-[2px]">
                              D
                            </button>
                            <button className="bg-[#EE5467] text-white text-[13px] font-semibold px-[7px] py-[2px] rounded-[2px] mr-[2px]">
                              W
                            </button>
                            <button className="bg-[#1CACB4] text-white text-[13px] font-semibold px-[7px] py-[2px] rounded-[2px]">
                              ⚙
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[3px] border border-[#e5e7eb] mb-[13px] mx-[6px]">
              <div className="px-[12px] pt-[13px] pb-[5px] text-gray-700 text-[16px] font-semibold">
                Summary
              </div>
              <div className="px-[12px] pb-[8px]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#f5f6fa]">
                      <th className="text-left text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                        My Balance
                      </th>
                      <th className="text-left text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                        Down Line Balance
                      </th>
                      <th className="text-left text-gray-700 text-[13px] font-semibold py-[6px] px-[6px] border-b border-[#e5e7eb]">
                        Rs. Exposure
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-[6px] px-[6px] text-[13px] text-gray-700">
                        24858.00
                      </td>
                      <td className="py-[6px] px-[6px] text-[13px] text-gray-700">
                        1887677.45
                      </td>
                      <td className="py-[6px] px-[6px] text-[13px] text-gray-700">
                        -177932.41
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <footer className="w-full md:px-0 px-4 text-gray-700 text-[12px] font-normal py-[10px]">
              <span className="text-gray-700 font-semibold">NEW247</span> |
              Powered By{" "}
              <span className="font-semibold text-gray-700">BSF Gaming</span> |
              Copyright Stockist Panel{" "}
              <span className="font-semibold">v2.0.0</span> © 2014-2021
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
