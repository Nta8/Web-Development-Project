// components/Navbar.tsx
interface Props {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between px-8 py-4 z-10">
      <div className="font-extrabold text-lg text-[#f0a500] tracking-widest">
        CINEMA <br /> CLUB
      </div>
      <div className="flex gap-6 items-center font-semibold">
        <a href="#" className="relative text-white hover:text-[#f0a500]">
          Home
        </a>
        <button
          onClick={onLoginClick}
          className="bg-orange-500 hover:bg-orange-700 px-4 py-2 rounded-full font-bold"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
