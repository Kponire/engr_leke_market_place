import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiShoppingBag,
  FiBarChart2,
  FiCreditCard,
  FiPackage,
  FiHeadphones,
} from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    { icon: FiHome, label: "Dashboard", path: "/dashboard" },
    { icon: FiShoppingBag, label: "My Store", path: "/dashboard/store" },
    { icon: FiBarChart2, label: "Reporting", path: "/dashboard/reporting" },
    { icon: FiCreditCard, label: "Payment", path: "/dashboard/payment" },
    { icon: FiPackage, label: "Inventory", path: "/dashboard/inventory" },
    { icon: FiHeadphones, label: "Support", path: "/dashboard/support" },
  ];

  return (
    <aside className="w-64 bg-gray-800 min-h-screen text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-green-500">Logo</h1>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            <item.icon className="text-xl" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
          <div>
            <h4 className="font-semibold text-white mb-2">ABOUT MARKETPLACE</h4>
            <p>Lorem ipsum</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">HOT LINKS</h4>
            <p>Lorem ipsum</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">OUR RESOURCES</h4>
            <p>Lorem ipsum</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">NEED HELP?</h4>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
