import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex items-center justify-end shadow-md">
      <div className="flex items-center gap-4">
        <span className="text-sm">Hi, Bartholomew</span>
        <button className="flex items-center gap-2 text-sm hover:text-green-500 transition-colors">
          <FiLogOut />
          <span>Sign Out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
