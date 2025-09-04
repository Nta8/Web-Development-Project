import { useState } from "react";

interface Props {
  onClose: () => void;
}

export default function LoginModal({ onClose }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "6803" && password === "1234") {
      alert("เข้าสู่ระบบสำเร็จ 🎉");
      onClose();
    } else {
      setError("❌ Username หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-20">
      <div className="bg-[#231815] p-8 rounded-2xl w-80 relative text-center text-white shadow-2xl border border-[#f0a500]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-[#f0a500] hover:text-orange-500 transition"
        >
          &times;
        </button>
        <h2 className="mb-6 text-2xl font-bold text-[#f0a500]">Sign In</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 rounded-md bg-[#2d211c] text-white border border-[#f0a500] focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-md bg-[#2d211c] text-white border border-[#f0a500] focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#f0a500] hover:bg-orange-500 px-4 py-2 rounded-md font-bold text-[#231815] transition"
          >
            Login
          </button>
        </form>
        {error && <div className="mt-4 text-orange-400 font-semibold">{error}</div>}
      </div>
    </div>
  );
}