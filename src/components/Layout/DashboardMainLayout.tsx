import Sidebar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const DashboardMainLayout = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardMainLayout;
