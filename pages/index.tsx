import { useState } from "react";
import Image from "next/image";
import LoginModal from "../components/LoginModal";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="bg-[#1a1210] text-white h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar onLoginClick={() => setShowLogin(true)} />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <Slider />
      </main>


      {/* เพิ่ม LoginModal ตรงนี้ */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
   
    </div>
  );
}
