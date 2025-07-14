import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import BettingHeader from "./components/BettingHeader";
import CricketBettingUI from "./readybook";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <BettingHeader />
        <CricketBettingUI />
      </div>
    </>
  );
}
